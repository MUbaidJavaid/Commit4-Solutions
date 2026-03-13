import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db/connection";
import { BlogPostModel } from "@/lib/db/models/BlogPost";
import { BlogCategoryModel } from "@/lib/db/models/BlogCategory";
import { ContactLeadModel } from "@/lib/db/models/ContactLead";

export async function GET() {
  await connectToDatabase();

  const [posts, categories, leads] = await Promise.all([
    BlogPostModel.find().sort({ createdAt: -1 }).lean(),
    BlogCategoryModel.find().lean(),
    ContactLeadModel.find().sort({ createdAt: -1 }).lean(),
  ]);

  const categoryStats = categories.map((c) => ({
    name: c.name,
    count: posts.filter(
      (p) => p.category.toString() === c._id.toString()
    ).length,
  }));

  return NextResponse.json({
    totalPosts: posts.length,
    publishedPosts: posts.filter((p) => p.status === "published").length,
    draftPosts: posts.filter((p) => p.status === "draft").length,
    totalCategories: categories.length,
    totalLeads: leads.length,
    recentPosts: posts.slice(0, 5).map((p) => ({
      id: p._id.toString(),
      title: p.title,
      slug: p.slug,
      featuredImage: p.featuredImage || "",
      author: p.author,
      readTime: p.readTime || "",
      status: p.status,
      createdAt: p.createdAt.toISOString(),
    })),
    categoryStats,
  });
}

