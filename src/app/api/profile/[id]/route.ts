import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/mongoose";
import User from "@/models/User";
import Post from "@/models/Post";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectDB();

  const user = await User.findById(params.id).select('-password');
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const posts = await Post.find({ author: user._id }).sort({ createdAt: -1 });

  return NextResponse.json({ user, posts });
}
