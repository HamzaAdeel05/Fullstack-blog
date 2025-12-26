// app/api/blog/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { imageBase64 } = body;

    const uploaded = await cloudinary.uploader.upload(imageBase64, {
      folder: 'blogs',
    });

    return NextResponse.json({ url: uploaded.secure_url });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ message: err.message || 'Upload failed' }, { status: 500 });
  }
}
