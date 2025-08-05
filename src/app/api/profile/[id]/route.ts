// import { NextResponse } from "next/server";
// import connectDB from "../../../../../lib/mongoose";
// import User from "@/models/User";
// import Post from "@/models/Post";

// export async function GET(_: Request, { params }: { params: { id: string } }) {
//   await connectDB();

//   const user = await User.findById(params.id).select('-password');
//   if (!user) {
//     return NextResponse.json({ error: "User not found" }, { status: 404 });
//   }

//   const posts = await Post.find({ author: user._id }).sort({ createdAt: -1 });

//   return NextResponse.json({ user, posts });
// }

// src/app/api/profile/[id]/route.ts
import { NextResponse } from 'next/server';
import connectDB from '../../../../../lib/mongoose';
import User from '@/models/User';
import Post from '@/models/Post';

export async function GET(req: Request) {
  await connectDB();

  const url = new URL(req.url);
  const id = url.pathname.split('/').pop(); // ✅ Extract the `[id]` from the URL

  if (!id) {
    return NextResponse.json({ error: 'User ID is missing' }, { status: 400 });
  }

  try {
    const user = await User.findById(id).select('-password');
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const posts = await Post.find({ author: id })
      .populate('author', 'name')
      .sort({ createdAt: -1 });

    return NextResponse.json({ user, posts });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
