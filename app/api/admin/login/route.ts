import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { authenticateAdmin, ensureDefaultAdmin, signAdminJwt } from "@/lib/server/adminAuth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body.email !== "string" || typeof body.password !== "string") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await ensureDefaultAdmin();

  const user = await authenticateAdmin(body.email, body.password);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signAdminJwt(user);

  const cookieStore = await cookies();
  cookieStore.set("admin_session", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return NextResponse.json({
    id: user._id.toString(),
    fullName: user.fullName,
    email: user.email,
    role: user.role,
  });
}

