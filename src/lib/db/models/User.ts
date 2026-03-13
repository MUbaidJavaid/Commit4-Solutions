import { Schema, model, models } from "mongoose";

export type UserRole = "admin";

export interface UserDocument {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin"], default: "admin" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const UserModel =
  (models.User as ReturnType<typeof model<UserDocument>>) ||
  model<UserDocument>("User", UserSchema);

