"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Search, Edit2, Trash2, Eye } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost, BlogCategory } from "@/lib/api/types";

type AdminPostRow = BlogPost & {
  categoryName?: string;
};

type AdminPostApi = AdminPostRow & {
  contentHtml: string;
};

export default function AdminPosts() {
  const [posts, setPosts] = useState<AdminPostRow[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<"all" | "published" | "draft">("all");
  const [catFilter, setCatFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [postsRes, catsRes] = await Promise.all([
          fetch("/api/admin/blogs"),
          fetch("/api/admin/categories"),
        ]);
        if (postsRes.ok) {
          const data: AdminPostApi[] = await postsRes.json();
          setPosts(
            data.map((p) => ({
              id: p.id,
              title: p.title,
              slug: p.slug,
              excerpt: p.excerpt,
              content: p.contentHtml,
              featuredImage: p.featuredImage,
              author: p.author,
              categoryId: p.categoryId,
              tags: p.tags,
              status: p.status,
              seoTitle: p.seoTitle,
              seoDescription: p.seoDescription,
              ogImage: p.ogImage,
              canonicalUrl: p.canonicalUrl,
              readTime: p.readTime,
              featured: p.featured,
              publishedAt: p.publishedAt,
              createdAt: p.createdAt,
              updatedAt: p.updatedAt,
              categoryName: p.categoryName,
            })),
          );
        }
        if (catsRes.ok) {
          const cats = await catsRes.json();
          setCategories(cats);
        }
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filtered = posts.filter((p) => {
    if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (statusFilter !== "all" && p.status !== statusFilter) return false;
    if (catFilter !== "all" && p.categoryId !== catFilter) return false;
    return true;
  });

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    await fetch(`/api/admin/blogs/${id}`, {
      method: "DELETE",
    });
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const getCatName = (id: string) =>
    categories.find((c) => c.id === id)?.name || "—";

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-heading font-bold text-white">Blog Posts</h1>
          <p className="text-sm font-body text-white/40">{posts.length} total posts</p>
        </div>
        <Link href="/admin/blogs/new" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-accent-foreground text-sm font-body font-semibold hover:opacity-90 transition-all">
          <Plus className="w-4 h-4" /> New Post
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-body placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value as "all" | "published" | "draft")}
          className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
        <select
          value={catFilter}
          onChange={e => setCatFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent/30"
        >
          <option value="all">All Categories</option>
          {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="py-16 text-center">
            <p className="text-sm text-white/30 font-body">
              Loading posts...
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm text-white/30 font-body">No posts found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left px-4 py-3 text-xs font-body font-medium text-white/40 uppercase tracking-wider">Post</th>
                  <th className="text-left px-4 py-3 text-xs font-body font-medium text-white/40 uppercase tracking-wider hidden md:table-cell">Category</th>
                  <th className="text-left px-4 py-3 text-xs font-body font-medium text-white/40 uppercase tracking-wider hidden sm:table-cell">Status</th>
                  <th className="text-left px-4 py-3 text-xs font-body font-medium text-white/40 uppercase tracking-wider hidden lg:table-cell">Date</th>
                  <th className="text-right px-4 py-3 text-xs font-body font-medium text-white/40 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((post, i) => (
                  <motion.tr
                    key={post.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {post.featuredImage ? (
                          <img src={post.featuredImage} alt="" className="w-10 h-10 rounded-lg object-cover shrink-0" />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-white/5 shrink-0" />
                        )}
                        <div className="min-w-0">
                          <div className="text-sm font-body font-medium text-white/80 truncate max-w-[250px]">{post.title}</div>
                          <div className="text-xs font-body text-white/30">{post.author} · {post.readTime}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-xs font-body text-white/50">{getCatName(post.categoryId)}</span>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className={`text-[10px] font-body font-medium px-2.5 py-1 rounded-full ${
                        post.status === "published" ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-xs font-body text-white/40">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <Link href={`/company/blog/${post.slug}`} target="_blank" className="p-2 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/5 transition-all">
                          <Eye className="w-3.5 h-3.5" />
                        </Link>
                        <Link href={`/admin/blogs/${post.id}`} className="p-2 rounded-lg text-white/30 hover:text-accent hover:bg-accent/10 transition-all">
                          <Edit2 className="w-3.5 h-3.5" />
                        </Link>
                        <button onClick={() => handleDelete(post.id)} className="p-2 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-400/10 transition-all">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
