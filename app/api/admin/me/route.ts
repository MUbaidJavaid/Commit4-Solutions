import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyAdminJwt } from "@/lib/server/adminAuth";
import { connectToDatabase } from "@/lib/db/connection";
import { UserModel } from "@/lib/db/models/User";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_session")?.value;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  const payload = verifyAdminJwt(token);
  if (!payload) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  await connectToDatabase();
  const user = await UserModel.findById(payload.sub).lean();

  if (!user || !user.isActive) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  return NextResponse.json({
    user: {
      id: user._id.toString(),
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  });
}

