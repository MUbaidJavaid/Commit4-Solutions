import { NextRequest, NextResponse } from "next/server";
import { Types } from "mongoose";
import { connectToDatabase } from "@/lib/db/connection";
import { BlogPostModel } from "@/lib/db/models/BlogPost";
import { BlogCategoryModel, type BlogCategoryDocument } from "@/lib/db/models/BlogCategory";
import { sanitizeBlogHtml } from "@/lib/blog/sanitize";
import { generateUniqueSlug } from "@/lib/blog/slug";

interface Params {
  params: Promise<{ id: string }>;
}

function estimateReadTime(html: string): string {
  const text = html.replace(/<[^>]*>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

export async function GET(_req: NextRequest, { params }: Params) {
  await connectToDatabase();
  const { id } = await params;
  const post = await BlogPostModel.findById(id)
    .populate("category")
    .lean();

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const category = post.category as unknown as BlogCategoryDocument;

  return NextResponse.json({
    id: post._id.toString(),
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.contentHtml,
    featuredImage: post.featuredImage || "",
    author: post.author,
    categoryId: category._id.toString(),
    tags: post.tags,
    status: post.status,
    seoTitle: post.seoTitle || "",
    seoDescription: post.seoDescription || "",
    ogImage: post.ogImage || "",
    canonicalUrl: post.canonicalUrl || "",
    readTime: post.readTime || "",
    featured: post.featured,
    publishedAt: post.publishedAt ? post.publishedAt.toISOString() : "",
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  });
}

export async function PUT(req: NextRequest, { params }: Params) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.title !== "string" || typeof body.content !== "string") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await connectToDatabase();

  const category = await BlogCategoryModel.findById(body.categoryId).lean();
  if (!category) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  const { id } = await params;
  const existing = await BlogPostModel.findById(id);
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const safeHtml = sanitizeBlogHtml(body.content);
  const slug = await generateUniqueSlug(body.slug || body.title, existing._id.toString());
  const readTime = body.readTime || estimateReadTime(safeHtml);

  existing.title = body.title;
  existing.slug = slug;
  existing.excerpt = body.excerpt || "";
  existing.contentHtml = safeHtml;
  existing.featuredImage = body.featuredImage || "";
  existing.author = body.author || "Admin";
  existing.category = category._id as unknown as Types.ObjectId;
  existing.tags = Array.isArray(body.tags) ? body.tags : [];
  existing.status = body.status === "published" ? "published" : "draft";
  existing.seoTitle = body.seoTitle || body.title;
  existing.seoDescription = body.seoDescription || body.excerpt || "";
  existing.ogImage = body.ogImage || body.featuredImage || "";
  existing.canonicalUrl = body.canonicalUrl || "";
  existing.featured = Boolean(body.featured);
  existing.readTime = readTime;
  existing.publishedAt =
    body.status === "published"
      ? new Date(body.publishedAt || existing.publishedAt || Date.now())
      : null;

  await existing.save();

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  await connectToDatabase();
  const { id } = await params;
  const deleted = await BlogPostModel.findByIdAndDelete(id).lean();
  if (!deleted) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}

