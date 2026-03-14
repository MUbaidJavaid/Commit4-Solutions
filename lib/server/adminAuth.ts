import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectToDatabase } from "@/lib/db/connection";
import { UserModel, type UserDocument } from "@/lib/db/models/User";

const JWT_SECRET = process.env.JWT_SECRET || "change-me-in-production";
const ADMIN_DEFAULT_EMAIL = "admin@gmail.com";
const ADMIN_DEFAULT_PASSWORD = "admin";

export interface AdminJwtPayload {
  sub: string;
  email: string;
  role: "admin";
}

export async function ensureDefaultAdmin() {
  await connectToDatabase();
  const existing = await UserModel.findOne({ role: "admin" }).lean();
  if (existing) return;

  const hashed = await bcrypt.hash(ADMIN_DEFAULT_PASSWORD, 10);
  await UserModel.create({
    fullName: "Admin",
    email: ADMIN_DEFAULT_EMAIL,
    password: hashed,
    role: "admin",
    isActive: true,
  });
}

export async function authenticateAdmin(
  email: string,
  password: string
): Promise<UserDocument | null> {
  await connectToDatabase();
  const user = await UserModel.findOne({ email, isActive: true });
  if (!user) return null;

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return null;

  return user;
}

export function signAdminJwt(user: UserDocument): string {
  const payload: AdminJwtPayload = {
    sub: user._id.toString(),
    email: user.email,
    role: "admin",
  };

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyAdminJwt(
  token: string
): AdminJwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AdminJwtPayload;
  } catch {
    return null;
  }
}

