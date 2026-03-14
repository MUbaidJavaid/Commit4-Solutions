import { Schema, model, models, Model } from "mongoose";

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

export const BlogCategoryModel: Model<BlogCategoryDocument> =
  (models.BlogCategory as Model<BlogCategoryDocument>) ||
  (model("BlogCategory", BlogCategorySchema) as Model<BlogCategoryDocument>);

