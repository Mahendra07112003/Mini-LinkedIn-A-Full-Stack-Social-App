import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "../../../../../lib/mongoose";
import Post from "@/models/Post";

interface JwtPayload {
  userId: string;
}

export async function POST(req: Request) {
  await connectDB();
  const token = req.headers.get("authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
  const userId = decoded.userId;

  const { content } = await req.json();
  const post = await Post.create({ content, author: userId });

  return NextResponse.json(post);
}
