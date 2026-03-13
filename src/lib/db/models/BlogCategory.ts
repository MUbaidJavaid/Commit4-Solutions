import { Schema, model, models } from "mongoose";

export interface BlogCategoryDocument {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogCategorySchema = new Schema<BlogCategoryDocument>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String },
  },
  { timestamps: true }
);

export const BlogCategoryModel =
  (models.BlogCategory as ReturnType<
    typeof model<BlogCategoryDocument>
  >) || model<BlogCategoryDocument>("BlogCategory", BlogCategorySchema);

