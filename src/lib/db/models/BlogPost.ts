import { Schema, model, models, Types } from "mongoose";

export type BlogStatus = "draft" | "published";

export interface BlogPostDocument {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  contentHtml: string;
  featuredImage?: string;
  author: string;
  category: Types.ObjectId;
  tags: string[];
  status: BlogStatus;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  featured: boolean;
  readTime?: string;
  publishedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema = new Schema<BlogPostDocument>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, required: true },
    contentHtml: { type: String, required: true },
    featuredImage: { type: String },
    author: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "BlogCategory", required: true },
    tags: [{ type: String }],
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    seoTitle: { type: String },
    seoDescription: { type: String },
    ogImage: { type: String },
    canonicalUrl: { type: String },
    featured: { type: Boolean, default: false },
    readTime: { type: String },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export const BlogPostModel =
  (models.BlogPost as ReturnType<typeof model<BlogPostDocument>>) ||
  model<BlogPostDocument>("BlogPost", BlogPostSchema);

