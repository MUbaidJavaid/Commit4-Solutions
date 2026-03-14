import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db/connection";
import { BlogCategoryModel } from "@/lib/db/models/BlogCategory";

interface Params {
  params: Promise<{ id: string }>;
}

export async function PUT(req: NextRequest, { params }: Params) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.name !== "string") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await connectToDatabase();

  const { id } = await params;

  const updated = await BlogCategoryModel.findByIdAndUpdate(
    id,
    {
      name: body.name,
      slug: body.slug,
      description: body.description || "",
    },
    { new: true }
  ).lean();

  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    id: updated._id.toString(),
    name: updated.name,
    slug: updated.slug,
    description: updated.description || "",
    createdAt: updated.createdAt.toISOString(),
    updatedAt: updated.updatedAt.toISOString(),
  });
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  await connectToDatabase();
  const { id } = await params;
  const existing = await BlogCategoryModel.findByIdAndDelete(id).lean();
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}

