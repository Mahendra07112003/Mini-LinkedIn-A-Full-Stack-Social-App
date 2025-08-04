import { NextResponse } from "next/server";
import connectDB from "../../../../lib/mongoose";
import "@/models/User"; 
import Post from "@/models/Post";

export async function GET() {
  await connectDB();
  const posts = await Post.find()
    .populate("author", "name email")
    .sort({ createdAt: -1 });

  return NextResponse.json(posts);
}
