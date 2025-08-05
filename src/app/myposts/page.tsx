import connectDB from "../../../lib/mongoose";
import Post from "@/models/Post";
import "@/models/User";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default async function MyPostsPage() {
  await connectDB();

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  let userId: string | null = null;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      userId = (decoded as { userId: string }).userId;
    } catch {
      console.log("Invalid token");
    }
  }

  if (!userId) {
    return (
      <div className="min-h-screen bg-[#f3f2ef] flex items-center justify-center">
        <p className="text-gray-600 text-lg">Please login to view your posts.</p>
      </div>
    );
  }

  const posts = await Post.find({ author: userId })
    .populate("author", "name")
    .sort({ createdAt: -1 });

  return (
    <div className="min-h-screen bg-[#f3f2ef] py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <Sidebar userId={userId} />

        {/* Main Feed */}
        <main className="flex-1">
          <div className="bg-white p-6 rounded-xl shadow-md mb-6">
            <h1 className="text-2xl font-bold text-blue-700 mb-4">📄 My Posts</h1>
            {posts.length === 0 ? (
              <p className="text-gray-600">You haven’t posted anything yet.</p>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} showLink />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
