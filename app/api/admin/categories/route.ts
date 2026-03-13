import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db/connection";
import { BlogCategoryModel } from "@/lib/db/models/BlogCategory";

export async function GET() {
  await connectToDatabase();
  const categories = await BlogCategoryModel.find().sort({ createdAt: -1 }).lean();

  return NextResponse.json(
    categories.map((c) => ({
      id: c._id.toString(),
      name: c.name,
      slug: c.slug,
      description: c.description || "",
      createdAt: c.createdAt.toISOString(),
      updatedAt: c.updatedAt.toISOString(),
    }))
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.name !== "string") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await connectToDatabase();

  const existing = await BlogCategoryModel.findOne({ slug: body.slug }).lean();
  if (existing) {
    return NextResponse.json({ error: "Slug already exists" }, { status: 400 });
  }

  const created = await BlogCategoryModel.create({
    name: body.name,
    slug: body.slug,
    description: body.description || "",
  });

  return NextResponse.json(
    {
      id: created._id.toString(),
      name: created.name,
      slug: created.slug,
      description: created.description || "",
      createdAt: created.createdAt.toISOString(),
      updatedAt: created.updatedAt.toISOString(),
    },
    { status: 201 }
  );
}

