 "use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Share2, Tag, ChevronRight, Link2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import { getPostBySlug, getPublishedPosts, getCategories } from "@/lib/api/storage";
import type { BlogPost, BlogCategory } from "@/lib/api/types";
import { toast } from "sonner";

interface Props {
  slug: string;
}

export default function BlogDetail({ slug }: Props) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [tocItems, setTocItems] = useState<{ id: string; text: string }[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const found = getPostBySlug(slug || "");
    setPost(found || null);
    setCategories(getCategories());
    const allPosts = getPublishedPosts();
    if (found) {
      setRelated(
        allPosts
          .filter((p) => p.slug !== slug && p.categoryId === found.categoryId)
          .slice(0, 3)
      );
      // Extract TOC from content headings
      const headingRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
      const items: { id: string; text: string }[] = [];
      let match;
      while ((match = headingRegex.exec(found.content)) !== null) {
        const text = match[1].replace(/<[^>]*>/g, "");
        items.push({ id: text.toLowerCase().replace(/\s+/g, "-"), text });
      }
      setTocItems(items);
    }
  }, [slug]);

  const getCatName = (id: string) =>
    categories.find((c) => c.id === id)?.name || "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  // Inject IDs into h2 tags for TOC linking
  const processedContent = post
    ? post.content.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (match, attrs, text) => {
        const plain = text.replace(/<[^>]*>/g, "");
        const id = plain.toLowerCase().replace(/\s+/g, "-");
        return `<h2${attrs} id="${id}">${text}</h2>`;
      })
    : "";

  if (!post) {
    return (
      <PageLayout>
        <div className="container-wide section-padding py-32 text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">
            Article not found
          </h1>
          <Link href="/company/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Breadcrumb + Meta Header */}
      <section className="bg-muted/40 border-b border-border/50">
        <div className="container-wide section-padding py-5">
          <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link
              href="/company/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-background">
        <div className="container-wide section-padding pt-12 sm:pt-16 pb-0">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="pill-accent mb-5 inline-block">
                {getCatName(post.categoryId)}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold tracking-tight leading-[1.12] mb-8">
                {post.title}
              </h1>

              {/* Author Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-sm font-heading font-bold text-accent">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-body font-semibold">
                      {post.author}
                    </p>
                    <p className="text-xs font-body text-muted-foreground">
                      Senior Engineer · {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-body text-muted-foreground flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 text-xs font-body font-medium bg-muted px-3 py-1.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    {copied ? (
                      <>✓ Copied</>
                    ) : (
                      <>
                        <Link2 className="w-3 h-3" /> Share
                      </>
                    )}
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-background">
        <div className="container-wide section-padding pt-10 pb-0">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 lg:h-[440px]">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Article Body + Sidebar */}
      <section className="bg-background">
        <div className="container-wide section-padding py-12 sm:py-16">
          <div className="max-w-4xl mx-auto flex gap-16">
            {/* TOC Sidebar */}
            {tocItems.length > 1 && (
              <aside className="hidden xl:block w-56 shrink-0">
                <div className="sticky top-28">
                  <p className="text-[10px] font-body font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    In This Article
                  </p>
                  <nav className="space-y-2.5">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm font-body text-muted-foreground hover:text-accent transition-colors leading-snug"
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Content */}
            <div className="flex-1 min-w-0">
              <AnimatedSection delay={0.15}>
                <div
                  className="prose prose-lg max-w-none font-body text-muted-foreground leading-[1.9]
                    [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:scroll-mt-24
                    [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3
                    [&_p]:mb-6 [&_p]:text-[16.5px]
                    [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-accent/30 hover:[&_a]:decoration-accent
                    [&_strong]:text-foreground [&_strong]:font-semibold
                    [&_ul]:my-5 [&_ul]:pl-5 [&_ul_li]:mb-2
                    [&_ol]:my-5 [&_ol]:pl-5 [&_ol_li]:mb-2
                    [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:bg-muted/50 [&_blockquote]:rounded-r-xl [&_blockquote]:px-6 [&_blockquote]:py-5 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-foreground/80
                    [&_img]:rounded-xl [&_img]:shadow-md [&_img]:my-8
                    [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
                    [&_pre]:bg-primary [&_pre]:text-primary-foreground [&_pre]:rounded-xl [&_pre]:p-5 [&_pre]:my-8 [&_pre]:overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: processedContent }}
                />
              </AnimatedSection>

              {/* Inline CTA */}
              <AnimatedSection delay={0.2}>
                <div className="my-12 p-8 bg-muted rounded-2xl border border-border">
                  <h3 className="text-xl font-heading font-bold mb-3">
                    Need help building this?
                  </h3>
                  <p className="text-sm font-body text-muted-foreground mb-5 leading-relaxed">
                    Our engineering team specializes in the technologies and
                    patterns discussed in this article. Let's talk about your
                    project.
                  </p>
                  <Link href="/contact" className="btn-accent text-sm">
                    Get in Touch <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-8 border-t border-border">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="pill bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author Bio */}
              <div className="mt-10 p-7 bg-muted/60 rounded-2xl border border-border/60">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-base font-heading font-bold text-accent">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-base mb-1">
                      Written by {post.author}
                    </p>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">
                      Senior Engineer at NexaBuild with expertise in scalable
                      systems, cloud architecture, and product engineering. Writes
                      about technology decisions that impact business outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="section-spacing bg-muted/50">
          <div className="container-wide section-padding">
            <AnimatedSection>
              <SectionLabel>Keep Reading</SectionLabel>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-12">
                Related articles
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((b, i) => (
                <AnimatedSection key={b.id} delay={i * 0.1}>
                  <Link
                    href={`/company/blog/${b.slug}`}
                    className="group card-premium-elevated overflow-hidden h-full flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={b.featuredImage}
                        alt={b.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="pill-accent text-[10px]">
                          {getCatName(b.categoryId)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-accent transition-colors duration-300 leading-snug line-clamp-2">
                        {b.title}
                      </h3>
                      <p className="text-sm font-body text-muted-foreground line-clamp-2 flex-1 mb-3">
                        {b.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs font-body text-muted-foreground pt-3 border-t border-border/50">
                        <span>{b.author}</span>
                        <span>{b.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* End CTA */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 geo-dots opacity-[0.03]" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[120px]" />
        <div className="relative container-wide section-padding py-20 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-5">
              Let's build something exceptional
            </h2>
            <p className="text-base font-body text-primary-foreground/60 max-w-lg mx-auto mb-8">
              Have a project in mind? Our engineering team is ready to help you
              turn your vision into reality.
            </p>
            <Link href="/contact" className="btn-accent">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
