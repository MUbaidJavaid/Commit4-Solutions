"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Save, Eye } from "lucide-react";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { toast } from "sonner";
import type { BlogCategory } from "@/lib/api/types";

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function estimateReadTime(content: string): string {
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

export default function AdminPostEditor() {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : Array.isArray(params?.id) ? params.id[0] : undefined;
  const router = useRouter();
  const isEditing = id && id !== "new";
  const [categories, setCategories] = useState<BlogCategory[]>([]);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featuredImage: "",
    author: "",
    categoryId: "",
    tags: "",
    status: "draft" as "draft" | "published",
    seoTitle: "",
    seoDescription: "",
    ogImage: "",
    canonicalUrl: "",
    featured: false,
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      const catsRes = await fetch("/api/admin/categories");
      if (catsRes.ok) {
        const cats = await catsRes.json();
        setCategories(cats);
        setForm((prev) => ({
          ...prev,
          categoryId: prev.categoryId || cats[0]?.id || "",
        }));
      }

      if (isEditing && id) {
        const postRes = await fetch(`/api/admin/blogs/${id}`);
        if (postRes.ok) {
          const post = await postRes.json();
          setForm({
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: post.content,
            featuredImage: post.featuredImage,
            author: post.author,
            categoryId: post.categoryId,
            tags: post.tags.join(", "),
            status: post.status,
            seoTitle: post.seoTitle,
            seoDescription: post.seoDescription,
            ogImage: post.ogImage,
            canonicalUrl: post.canonicalUrl,
            featured: post.featured,
          });
        }
      }
    };
    load();
  }, [id, isEditing]);

  const update = (key: string, value: any) => {
    setForm(prev => {
      const next = { ...prev, [key]: value };
      if (key === "title" && !isEditing) next.slug = generateSlug(value);
      return next;
    });
  };

  const handleSave = async () => {
    if (!form.title.trim()) { toast.error("Title is required"); return; }
    if (!form.slug.trim()) { toast.error("Slug is required"); return; }
    setSaving(true);
    const data = {
      title: form.title, slug: form.slug, excerpt: form.excerpt,
      content: form.content, featuredImage: form.featuredImage,
      author: form.author || "Admin", categoryId: form.categoryId,
      tags: form.tags.split(",").map(t => t.trim()).filter(Boolean),
      status: form.status,
      seoTitle: form.seoTitle || form.title,
      seoDescription: form.seoDescription || form.excerpt,
      ogImage: form.ogImage || form.featuredImage,
      canonicalUrl: form.canonicalUrl,
      readTime: estimateReadTime(form.content),
      featured: form.featured,
      publishedAt: form.status === "published" ? new Date().toISOString() : "",
    };
    try {
      const res = await fetch(
        isEditing && id ? `/api/admin/blogs/${id}` : "/api/admin/blogs",
        {
          method: isEditing && id ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        toast.error("Failed to save post");
      } else {
        toast.success(isEditing ? "Post updated" : "Post created");
        router.push("/admin/blogs");
      }
    } finally {
      setSaving(false);
    }
  };

  const ic = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-body placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all";
  const lc = "text-xs font-body font-medium text-white/50 mb-1.5 block uppercase tracking-wider";

  return (
    <div className="space-y-5 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => router.push("/admin/blogs")} className="p-2 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/5 transition-all">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-heading font-bold text-white">{isEditing ? "Edit Post" : "New Post"}</h1>
        </div>
        <div className="flex items-center gap-2">
          {form.slug && (
            <a href={`/blog/${form.slug}`} target="_blank" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-body text-white/40 hover:text-white/60 hover:bg-white/5 transition-all">
              <Eye className="w-3.5 h-3.5" /> Preview
            </a>
          )}
          <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-accent-foreground text-sm font-body font-semibold hover:opacity-90 transition-all disabled:opacity-50">
            <Save className="w-4 h-4" /> {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 space-y-4">
            <div>
              <label className={lc}>Title</label>
              <input value={form.title} onChange={e => update("title", e.target.value)} placeholder="Post title" className={ic} />
            </div>
            <div>
              <label className={lc}>Slug</label>
              <input value={form.slug} onChange={e => update("slug", e.target.value)} placeholder="post-url-slug" className={ic} />
            </div>
            <div>
              <label className={lc}>Excerpt</label>
              <textarea value={form.excerpt} onChange={e => update("excerpt", e.target.value)} placeholder="Brief description..." rows={2} className={ic + " resize-none"} />
            </div>
            <div>
              <label className={lc}>Content</label>
              <RichTextEditor content={form.content} onChange={(html) => update("content", html)} />
            </div>
          </div>

          {/* SEO */}
          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-heading font-semibold text-white/70">SEO Settings</h3>
            <div>
              <label className={lc}>SEO Title</label>
              <input value={form.seoTitle} onChange={e => update("seoTitle", e.target.value)} placeholder="SEO optimized title" className={ic} />
            </div>
            <div>
              <label className={lc}>SEO Description</label>
              <textarea value={form.seoDescription} onChange={e => update("seoDescription", e.target.value)} placeholder="Meta description" rows={2} className={ic + " resize-none"} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={lc}>OG Image URL</label>
                <input value={form.ogImage} onChange={e => update("ogImage", e.target.value)} placeholder="https://..." className={ic} />
              </div>
              <div>
                <label className={lc}>Canonical URL</label>
                <input value={form.canonicalUrl} onChange={e => update("canonicalUrl", e.target.value)} placeholder="https://..." className={ic} />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-heading font-semibold text-white/70">Publish</h3>
            <div>
              <label className={lc}>Status</label>
              <select value={form.status} onChange={e => update("status", e.target.value)} className={ic}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={form.featured} onChange={e => update("featured", e.target.checked)} id="featured" className="w-4 h-4 rounded bg-white/5 border-white/20 text-accent focus:ring-accent/30" />
              <label htmlFor="featured" className="text-sm font-body text-white/60">Featured post</label>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-heading font-semibold text-white/70">Details</h3>
            <div>
              <label className={lc}>Author</label>
              <input value={form.author} onChange={e => update("author", e.target.value)} placeholder="Author name" className={ic} />
            </div>
            <div>
              <label className={lc}>Category</label>
              <select value={form.categoryId} onChange={e => update("categoryId", e.target.value)} className={ic}>
                <option value="">Select category</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className={lc}>Tags (comma separated)</label>
              <input value={form.tags} onChange={e => update("tags", e.target.value)} placeholder="react, nextjs, frontend" className={ic} />
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-heading font-semibold text-white/70">Featured Image</h3>
            <div>
              <label className={lc}>Image URL</label>
              <input value={form.featuredImage} onChange={e => update("featuredImage", e.target.value)} placeholder="https://images.unsplash.com/..." className={ic} />
            </div>
            {form.featuredImage && (
              <img src={form.featuredImage} alt="Preview" className="w-full h-32 object-cover rounded-xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
