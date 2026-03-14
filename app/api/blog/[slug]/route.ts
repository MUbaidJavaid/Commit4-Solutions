import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db/connection";
import { BlogPostModel } from "@/lib/db/models/BlogPost";
import { BlogCategoryModel, type BlogCategoryDocument } from "@/lib/db/models/BlogCategory";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function GET(_req: Request, { params }: Params) {
  await connectToDatabase();

  const { slug } = await params;

  const post = await BlogPostModel.findOne({
    slug,
    status: "published",
  })
    .populate("category")
    .lean();

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const categoryDoc = post.category as unknown as BlogCategoryDocument;
  const categoryId = categoryDoc._id.toString();
  const category = await BlogCategoryModel.findById(categoryId).lean();

  return NextResponse.json({
    id: post._id.toString(),
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    contentHtml: post.contentHtml,
    featuredImage: post.featuredImage || "",
    author: post.author,
    categoryId,
    categoryName: category?.name || "",
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

