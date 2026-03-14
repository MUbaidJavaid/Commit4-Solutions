 "use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Clock, User, ArrowRight, Search, ChevronDown, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";
import type { BlogPost, BlogCategory } from "@/lib/api/types";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"latest" | "popular">("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/blog");
        if (!res.ok) return;
        const data = await res.json();
        setPosts(data.posts);
        setCategories(data.categories);
      } catch {
        // ignore
      }
    };
    load();
  }, []);

  const featured = posts.find((b) => b.featured);
  const catNames = ["All", ...categories.map((c) => c.name)];
  const getCatName = (categoryId: string) =>
    categories.find((c) => c.id === categoryId)?.name || "";

  const filtered = useMemo(() => {
    let result = posts;
    if (activeCategory !== "All") {
      result = result.filter((b) => {
        const cat = categories.find((c) => c.id === b.categoryId);
        return cat?.name === activeCategory;
      });
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [posts, categories, activeCategory, searchQuery]);

  const trending = posts.filter((p) => !p.featured).slice(0, 3);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 geo-dots opacity-[0.04]" />
        <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px]" />
        <div className="relative container-wide section-padding pt-20 pb-16 sm:pt-28 sm:pb-20">
          <AnimatedSection>
            <SectionLabel>Blog & Insights</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground tracking-tight leading-[1.08] max-w-2xl mt-4">
              Ideas that shape <br />
              <span className="text-accent">digital products</span>
            </h1>
            <p className="text-base sm:text-lg font-body text-primary-foreground/60 max-w-xl mt-6 leading-relaxed">
              Engineering insights, design thinking, and product strategy from
              the team building tomorrow's software.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Article Spotlight */}
      {featured && (
        <section className="bg-background">
          <div className="container-wide section-padding py-16 sm:py-20">
            <AnimatedSection>
              <div className="flex items-center justify-between mb-10">
                <SectionLabel>Featured Story</SectionLabel>
              </div>
              <Link
                href={`/company/blog/${featured.slug}`}
                className="group grid lg:grid-cols-[1.15fr_1fr] gap-0 card-premium-elevated overflow-hidden"
              >
                <div className="relative h-72 lg:h-[420px] overflow-hidden">
                  <img
                    src={featured.featuredImage}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/20" />
                  <div className="absolute top-6 left-6">
                    <span className="pill-accent text-[11px] font-semibold shadow-sm">
                      {getCatName(featured.categoryId)}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-[10px] font-heading font-bold text-accent">
                        {featured.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-body font-semibold">
                        {featured.author}
                      </p>
                      <p className="text-xs font-body text-muted-foreground">
                        {featured.readTime}
                      </p>
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-heading font-bold leading-snug mb-4 group-hover:text-accent transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="pill bg-muted text-muted-foreground text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-body font-semibold text-accent group-hover:gap-3 transition-all duration-300">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Trending Stories */}
      {trending.length > 0 && (
        <section className="bg-muted/50">
          <div className="container-wide section-padding py-14">
            <AnimatedSection>
              <SectionLabel>Trending Now</SectionLabel>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-5 mt-8">
              {trending.map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 0.08}>
                  <Link
                    href={`/company/blog/${post.slug}`}
                    className="group flex gap-5 items-start p-5 card-premium hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-4xl font-heading font-bold text-border group-hover:text-accent/30 transition-colors shrink-0">
                      0{i + 1}
                    </span>
                    <div className="min-w-0">
                      <span className="text-[10px] font-body font-semibold text-accent uppercase tracking-wider">
                        {getCatName(post.categoryId)}
                      </span>
                      <h3 className="font-heading font-semibold text-sm mt-1 mb-1.5 leading-snug group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <span className="text-[11px] font-body text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter Bar */}
      <section className="bg-background sticky top-[72px] z-30 backdrop-blur-xl bg-background/95 border-b border-border/50">
        <div className="container-wide section-padding">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-5">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {catNames.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`pill transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search + Sort */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="pl-9 pr-4 py-2 text-sm font-body bg-muted rounded-full border-0 outline-none focus:ring-2 focus:ring-accent/30 w-48 transition-all"
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowSortMenu(!showSortMenu)}
                  className="pill bg-muted text-muted-foreground flex items-center gap-1.5 hover:text-foreground transition-colors"
                >
                  {sortBy === "latest" ? "Latest" : "Popular"}{" "}
                  <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {showSortMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="absolute right-0 top-full mt-1 bg-card border border-border rounded-xl shadow-lg py-1 z-40 min-w-[120px]"
                    >
                      {["latest", "popular"].map((s) => (
                        <button
                          key={s}
                          onClick={() => {
                            setSortBy(s as "latest" | "popular");
                            setShowSortMenu(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-sm font-body hover:bg-muted transition-colors capitalize ${
                            sortBy === s
                              ? "text-accent font-semibold"
                              : "text-foreground"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-spacing bg-background">
        <div className="container-wide section-padding">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-heading font-semibold mb-2">
                No articles found
              </p>
              <p className="text-sm font-body text-muted-foreground">
                Try adjusting your filters or search terms.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.slice(0, visibleCount).map((blog, i) => (
                  <AnimatedSection key={blog.id} delay={i * 0.06}>
                    <Link
                      href={`/company/blog/${blog.slug}`}
                      className="group card-premium-elevated overflow-hidden h-full flex flex-col"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={blog.featuredImage}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="pill-accent text-[10px] font-semibold">
                            {getCatName(blog.categoryId)}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-accent transition-colors duration-300 leading-snug line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-sm font-body text-muted-foreground leading-relaxed flex-1 mb-5 line-clamp-2">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
                              <span className="text-[9px] font-heading font-bold text-accent">
                                {blog.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <span className="text-xs font-body font-medium">
                              {blog.author}
                            </span>
                          </div>
                          <span className="text-[11px] font-body text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {blog.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>

              {visibleCount < filtered.length && (
                <div className="text-center mt-14">
                  <button
                    onClick={() => setVisibleCount((v) => v + 6)}
                    className="btn-outline"
                  >
                    Load More Articles{" "}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 geo-dots opacity-[0.03]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="relative container-wide section-padding py-20 sm:py-28">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection>
              <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Stay ahead of the curve
              </h2>
              <p className="text-base font-body text-primary-foreground/60 mb-8">
                Get weekly engineering insights, product strategy tips, and
                industry analysis delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3.5 rounded-full bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm border border-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
                <button className="btn-accent shrink-0">
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs font-body text-primary-foreground/40 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
