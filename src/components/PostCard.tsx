// type PostProps = {
//   post: {
//     _id: string;
//     content: string;
//     createdAt: string;
//     author: { name: string };
//   };
// };

// export default function PostCard({ post }: PostProps) {
//   return (
//     <div className="border p-4 rounded mb-3">
//       <p className="text-sm text-gray-500">
//         <strong>{post.author.name}</strong> •{" "}
//         {new Date(post.createdAt).toLocaleString()}
//       </p>
//       <p className="mt-2">{post.content}</p>
//     </div>
//   );
// }


// components/PostCard.tsx

import Link from "next/link";

interface PostCardProps {
  post: {
    _id: string;
    content: string;
    createdAt: Date;
    author: {
      _id: string;
      name: string;
    };
  };
  showLink?: boolean;
}

export default function PostCard({ post, showLink = false }: PostCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4 transition-all duration-200 hover:shadow-lg">
      {showLink ? (
        <Link href={`/profile/${post.author._id}`}>
          <h2 className="font-semibold text-blue-700 hover:underline cursor-pointer">
            {post.author.name}
          </h2>
        </Link>
      ) : (
        <h2 className="font-semibold text-gray-800">{post.author.name}</h2>
      )}
      <p className="mt-2 text-gray-700">{post.content}</p>
      <small className="text-gray-500 block mt-2">
        {new Date(post.createdAt).toLocaleString()}
      </small>
    </div>
  );
}
