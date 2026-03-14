import { BlogPostModel } from "@/lib/db/models/BlogPost";
import { connectToDatabase } from "@/lib/db/connection";

export async function generateUniqueSlug(base: string, existingId?: string) {
  await connectToDatabase();

  const normalized = base
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  if (!normalized) return "";

  let slug = normalized;
  let counter = 1;

  while (true) {
    const existing = await BlogPostModel.findOne({ slug }).lean();

    if (!existing || (existingId && existing._id.toString() === existingId)) {
      return slug;
    }

    counter += 1;
    slug = `${normalized}-${counter}`;
  }
}

