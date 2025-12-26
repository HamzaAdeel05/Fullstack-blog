import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Blog from "@/lib/models/Blog";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connect();

  const { id } = await params; // ✅ IMPORTANT FIX

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
