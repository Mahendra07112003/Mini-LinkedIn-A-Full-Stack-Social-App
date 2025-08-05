import React from "react";
import { headers } from "next/headers";

type Params = { params: Promise<{ id: string }> };
type Post = {
  _id: string;
  content: string;
  createdAt: string;
};

export default async function ProfilePage({ params }: Params) {
  const resolvedParams = await params;
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/profile/${resolvedParams.id}`, {
    cache: "no-store",
  });

  const { user, posts } = await res.json();

  return (
    <div className="min-h-screen bg-[#f3f2ef] text-black py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h1 className="text-3xl font-bold text-blue-700 mb-1">{user.name}</h1>
          <p className="text-sm text-gray-600 mb-1">{user.email}</p>
          {user.bio && <p className="text-base text-gray-800 mt-2">{user.bio}</p>}
        </div>

        {/* Posts Section */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Posts</h2>
          {posts.length === 0 ? (
            <p className="text-gray-500">No posts yet.</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post: Post) => (
                <div
                  key={post._id}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                >
                  <p className="text-gray-800">{post.content}</p>
                  <small className="block text-right text-gray-500 text-xs mt-2">
                    {new Date(post.createdAt).toLocaleString()}
                  </small>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
