 "use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FileText, FolderOpen, MessageSquare, TrendingUp, Plus, Eye, Edit2 } from "lucide-react";
import { motion } from "framer-motion";
import type { DashboardStats } from "@/lib/api/types";

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/admin/dashboard");
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const cards = stats
    ? [
        { label: "Total Posts", value: stats.totalPosts, icon: FileText, color: "bg-accent/15 text-accent" },
        { label: "Published", value: stats.publishedPosts, icon: TrendingUp, color: "bg-emerald-500/15 text-emerald-400" },
        { label: "Drafts", value: stats.draftPosts, icon: Edit2, color: "bg-amber-500/15 text-amber-400" },
        { label: "Categories", value: stats.totalCategories, icon: FolderOpen, color: "bg-blue-500/15 text-blue-400" },
        { label: "Leads", value: stats.totalLeads, icon: MessageSquare, color: "bg-purple-500/15 text-purple-400" },
      ]
    : [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-heading font-bold text-white">Dashboard</h1>
          <p className="text-sm font-body text-white/40 mt-0.5">Overview of your content</p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-accent-foreground text-sm font-body font-semibold hover:opacity-90 transition-all"
        >
          <Plus className="w-4 h-4" /> New Post
        </Link>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {loading && cards.length === 0
          ? Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 animate-pulse"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 mb-3" />
                <div className="h-6 w-12 bg-white/10 rounded mb-2" />
                <div className="h-3 w-20 bg-white/5 rounded" />
              </div>
            ))
          : cards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/[0.03] border border-white/5 rounded-2xl p-4"
              >
                <div
                  className={`w-9 h-9 rounded-xl ${card.color} flex items-center justify-center mb-3`}
                >
                  <card.icon className="w-4 h-4" />
                </div>
                <div className="text-2xl font-heading font-bold text-white">
                  {card.value}
                </div>
                <div className="text-xs font-body text-white/40 mt-0.5">
                  {card.label}
                </div>
              </motion.div>
            ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Recent Posts */}
        <div className="lg:col-span-2 bg-white/[0.03] border border-white/5 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-heading font-semibold text-white/80">Recent Posts</h3>
            <Link href="/admin/blogs" className="text-xs font-body text-accent hover:underline">View all</Link>
          </div>
          <div className="space-y-2">
            {!stats || stats.recentPosts.length === 0 ? (
              <p className="text-sm text-white/30 font-body py-8 text-center">No posts yet. Create your first one!</p>
            ) : (
              stats.recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/admin/blogs/${post.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group"
                >
                  {post.featuredImage ? (
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                      <Image src={post.featuredImage} alt="" fill className="object-cover" unoptimized />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-white/5 shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-body font-medium text-white/80 truncate group-hover:text-accent transition-colors">{post.title}</div>
                    <div className="text-xs font-body text-white/30">{post.author} · {post.readTime}</div>
                  </div>
                  <span className={`text-[10px] font-body font-medium px-2 py-0.5 rounded-full ${
                    post.status === "published" ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"
                  }`}>
                    {post.status}
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Category Stats */}
        <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-heading font-semibold text-white/80">Categories</h3>
            <Link href="/admin/categories" className="text-xs font-body text-accent hover:underline">Manage</Link>
          </div>
          <div className="space-y-2">
            {!stats || stats.categoryStats.length === 0 ? (
              <p className="text-sm text-white/30 font-body py-8 text-center">No categories yet</p>
            ) : (
              stats.categoryStats.map((cat) => (
                <div key={cat.name} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02]">
                  <span className="text-sm font-body text-white/60">{cat.name}</span>
                  <span className="text-xs font-body font-medium text-white/40 bg-white/5 px-2 py-0.5 rounded-full">
                    {cat.count} post{cat.count !== 1 ? "s" : ""}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5">
        <h3 className="text-sm font-heading font-semibold text-white/80 mb-4">Quick Actions</h3>
        <div className="grid sm:grid-cols-3 gap-3">
          <Link href="/admin/blogs/new" className="flex items-center gap-3 p-4 rounded-xl bg-accent/10 hover:bg-accent/15 transition-all group">
            <Plus className="w-5 h-5 text-accent" />
            <div>
              <div className="text-sm font-body font-medium text-white/80">New Blog Post</div>
              <div className="text-xs font-body text-white/30">Write and publish</div>
            </div>
          </Link>
          <Link href="/admin/categories" className="flex items-center gap-3 p-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/15 transition-all">
            <FolderOpen className="w-5 h-5 text-blue-400" />
            <div>
              <div className="text-sm font-body font-medium text-white/80">Manage Categories</div>
              <div className="text-xs font-body text-white/30">Organize content</div>
            </div>
          </Link>
          <Link href="/company/blog" target="_blank" className="flex items-center gap-3 p-4 rounded-xl bg-purple-500/10 hover:bg-purple-500/15 transition-all">
            <Eye className="w-5 h-5 text-purple-400" />
            <div>
              <div className="text-sm font-body font-medium text-white/80">View Website</div>
              <div className="text-xs font-body text-white/30">Open frontend</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
