// 'use client';
// import { useState, useEffect } from 'react';

// export default function PostForm() {
//   const [content, setContent] = useState('');
//   const [token, setToken] = useState<string | null>(null);

//   // Read token from localStorage after component mounts
//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     setToken(storedToken);
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!token) {
//       alert("You're not logged in.");
//       return;
//     }

//     if (!content.trim()) {
//       alert("Post content cannot be empty.");
//       return;
//     }

//     const res = await fetch('/api/posts/new', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`, // ✅ Must be in this format
//       },
//       body: JSON.stringify({ content }),
//     });

//     if (res.ok) {
//       setContent('');
//       window.location.reload(); // Optional: reload to show the new post
//     } else {
//       const data = await res.json();
//       alert(data.error || 'Failed to create post');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-4">
//       <textarea
//         className="w-full p-2 border rounded"
//         placeholder="What's on your mind?"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
//       >
//         Post
//       </button>
//     </form>
//   );
// }


// components/PostForm.tsx

"use client";

import { useState } from "react";

export default function PostForm() {
  const [content, setContent] = useState("");

  const handlePost = async () => {
    const token = localStorage.getItem("token");
    if (!token || !content.trim()) return;

    const res = await fetch("/api/posts/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content }),
    });

    if (res.ok) {
      setContent("");
      window.location.reload();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        rows={3}
        className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
      />
      <div className="text-right mt-2">
        <button
          onClick={handlePost}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200 disabled:opacity-50"
          disabled={!content.trim()}
        >
          Post
        </button>
      </div>
    </div>
  );
}
