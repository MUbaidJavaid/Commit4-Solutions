import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db/connection";
import { BlogPostModel } from "@/lib/db/models/BlogPost";
import { BlogCategoryModel, type BlogCategoryDocument } from "@/lib/db/models/BlogCategory";

export async function GET(req: NextRequest) {
  await connectToDatabase();

  const url = new URL(req.url);
  const categorySlug = url.searchParams.get("category");
  const search = url.searchParams.get("q") || "";

  const categoryFilter: Record<string, unknown> = {};
  if (categorySlug) {
    const cat = await BlogCategoryModel.findOne({ slug: categorySlug }).lean();
    if (cat) {
      categoryFilter.category = cat._id;
    }
  }

  const textFilter =
    search.trim().length > 0
      ? {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { excerpt: { $regex: search, $options: "i" } },
            { tags: { $regex: search, $options: "i" } },
          ],
        }
      : {};

  const posts = await BlogPostModel.find({
    status: "published",
    ...categoryFilter,
    ...textFilter,
  })
    .populate("category")
    .sort({ publishedAt: -1, createdAt: -1 })
    .lean();

  const categories = await BlogCategoryModel.find().lean();

  return NextResponse.json({
    posts: posts.map((p) => {
      const category = p.category as unknown as BlogCategoryDocument;
      return {
        id: p._id.toString(),
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        featuredImage: p.featuredImage || "",
        author: p.author,
        categoryId: category._id.toString(),
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
    categories: categories.map((c) => ({
      id: c._id.toString(),
      name: c.name,
      slug: c.slug,
      description: c.description || "",
      createdAt: c.createdAt.toISOString(),
      updatedAt: c.updatedAt.toISOString(),
    })),
  });
}

