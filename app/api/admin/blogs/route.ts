import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db/connection";
import { BlogPostModel } from "@/lib/db/models/BlogPost";
import { BlogCategoryModel, type BlogCategoryDocument } from "@/lib/db/models/BlogCategory";
import { sanitizeBlogHtml } from "@/lib/blog/sanitize";
import { generateUniqueSlug } from "@/lib/blog/slug";

function estimateReadTime(html: string): string {
  const text = html.replace(/<[^>]*>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

export async function GET() {
  await connectToDatabase();
  const posts = await BlogPostModel.find()
    .populate("category")
    .sort({ createdAt: -1 })
    .lean();

  return NextResponse.json(
    posts.map((p) => {
      const category = p.category as unknown as BlogCategoryDocument;
      return {
        id: p._id.toString(),
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        contentHtml: p.contentHtml,
        featuredImage: p.featuredImage || "",
        author: p.author,
        categoryId: category._id.toString(),
        categoryName: category.name,
        tags: p.tags,
        status: p.status,
        seoTitle: p.seoTitle || "",
        seoDescription: p.seoDescription || "",
        ogImage: p.ogImage || "",
        canonicalUrl: p.canonicalUrl || "",
        readTime: p.readTime || "",
        featured: p.featured,
        publishedAt: p.publishedAt ? p.publishedAt.toISOString() : "",
        createdAt: p.createdAt.toISOString(),
        updatedAt: p.updatedAt.toISOString(),
      };
    }),
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.title !== "string" || typeof body.content !== "string") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await connectToDatabase();

  const category = await BlogCategoryModel.findById(body.categoryId).lean();
  if (!category) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  const safeHtml = sanitizeBlogHtml(body.content);
  const slug = await generateUniqueSlug(body.slug || body.title);
  const readTime = body.readTime || estimateReadTime(safeHtml);

  const created = await BlogPostModel.create({
    title: body.title,
    slug,
    excerpt: body.excerpt || "",
    contentHtml: safeHtml,
    featuredImage: body.featuredImage || "",
    author: body.author || "Admin",
    category: category._id,
    tags: Array.isArray(body.tags) ? body.tags : [],
    status: body.status === "published" ? "published" : "draft",
    seoTitle: body.seoTitle || body.title,
    seoDescription: body.seoDescription || body.excerpt || "",
    ogImage: body.ogImage || body.featuredImage || "",
    canonicalUrl: body.canonicalUrl || "",
    featured: Boolean(body.featured),
    readTime,
    publishedAt:
      body.status === "published" ? new Date(body.publishedAt || Date.now()) : null,
  });

  return NextResponse.json(
    {
      id: created._id.toString(),
      slug: created.slug,
    },
    { status: 201 }
  );
}

