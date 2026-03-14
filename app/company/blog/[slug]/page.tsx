import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { connectToDatabase } from "@/lib/db/connection";
import { BlogPostModel } from "@/lib/db/models/BlogPost";
import { BlogCategoryModel, type BlogCategoryDocument } from "@/lib/db/models/BlogCategory";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  await connectToDatabase();
  const { slug } = await params;
  const post = await BlogPostModel.findOne({
    slug,
    status: "published",
  }).lean();

  if (!post) {
    return {
      title: "Blog | Commit4Solutions",
    };
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const ogImage = post.ogImage || post.featuredImage;
  const canonicalUrl = post.canonicalUrl || `/company/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl,
      images: ogImage ? [ogImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function Page({ params }: Props) {
  await connectToDatabase();

  const { slug } = await params;

  const post = await BlogPostModel.findOne({
    slug,
    status: "published",
  })
    .populate("category")
    .lean();

  if (!post) {
    notFound();
  }

  const categoryDoc = post.category as unknown as BlogCategoryDocument;
  const categoryId = categoryDoc._id.toString();
  const category = await BlogCategoryModel.findById(categoryId).lean();

  return (
    <article className="section-spacing bg-background">
      <div className="container-wide section-padding max-w-4xl mx-auto">
        <header className="mb-10">
          <p className="pill-accent mb-4 inline-flex">
            {category?.name || "Blog"}
          </p>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            {post.title}
          </h1>
          <p className="text-base font-body text-muted-foreground mb-4">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs font-body text-muted-foreground">
            <span>{post.author}</span>
            {post.publishedAt && (
              <>
                <span>•</span>
                <span>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </>
            )}
            {post.readTime && (
              <>
                <span>•</span>
                <span>{post.readTime}</span>
              </>
            )}
          </div>
        </header>

        {post.featuredImage && (
          <div className="mb-10 rounded-2xl overflow-hidden">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-invert max-w-none prose-headings:font-heading prose-p:text-base prose-li:text-base"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}

