// import connectDB from "../../lib/mongoose";
// import Post from "@/models/Post";
// import "@/models/User";
// import PostCard from "@/components/PostCard";
// import PostForm from "@/components/PostForm";

// export default async function Home() {
//   await connectDB();
//   const posts = await Post.find()
//     .populate("author", "name")
//     .sort({ createdAt: -1 });

//   // For now, use dummy token from login page
//   const token = ""; // We'll fix this with cookies or localStorage

//    return (
//     <main className="max-w-2xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Home Feed</h1>
//       <PostForm  />
//       {posts.map((post) => (
//         <PostCard key={post._id} post={post} />
//       ))}
//     </main>
//   );
// }

// import connectDB from "../../lib/mongoose";
// import Post from "@/models/Post";
// import "@/models/User";
// import PostCard from "@/components/PostCard";
// import PostForm from "@/components/PostForm";

// import { cookies } from "next/headers";
// import jwt from "jsonwebtoken";

// interface Author {
//   _id: string;
//   name: string;
// }

// interface PostWithAuthor {
//   _id: string;
//   content: string;
//   author: Author;
//   createdAt: string;
//   updatedAt: string;
// }

// export default async function Home() {
//   await connectDB();

//   const posts: PostWithAuthor[] = await Post.find()
//     .populate("author", "name")
//     .sort({ createdAt: -1 });

//   const cookieStore = cookies();
//   const token = cookieStore.get("token")?.value;

//   let userId: string | null = null;
//   if (token) {
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET!);
//       userId = (decoded as { userId: string }).userId;
//     } catch (err) {
//       console.log("Invalid token");
//     }
//   }

//   return (
//     <main className="max-w-2xl mx-auto p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">🔗 Mini LinkedIn</h1>

//         {userId ? (
//           <div className="flex gap-4">
//             <a href={`/profile/${userId}`} className="text-blue-600 hover:underline">
//               My Profile
//             </a>
//             <a href="/logout" className="text-red-600 hover:underline">
//               Logout
//             </a>
//           </div>
//         ) : (
//           <div className="flex gap-4">
//             <a href="/login" className="text-blue-600 hover:underline">
//               Login
//             </a>
//             <a href="/register" className="text-green-600 hover:underline">
//               Register
//             </a>
//           </div>
//         )}
//       </div>

//       {userId ? (
//         <PostForm />
//       ) : (
//         <p className="text-gray-500 mb-4">Login to post something.</p>
//       )}

//       {posts.map((post: PostWithAuthor) => (
//         <PostCard key={post._id} post={post} showLink={!!userId} />
//       ))}
//     </main>
//   );
// }

// app/page.tsx

// import connectDB from "../../lib/mongoose";
// import Post from "@/models/Post";
// import "@/models/User";
// import PostCard from "@/components/PostCard";
// import PostForm from "@/components/PostForm";

// import { cookies } from "next/headers";
// import jwt from "jsonwebtoken";
// import Footer from "@/components/Footer";

// interface Author {
//   _id: string;
//   name: string;
// }

// interface PostWithAuthor {
//   _id: string;
//   content: string;
//   author: Author;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export default async function Home() {
//   await connectDB();

//   const posts: PostWithAuthor[] = await Post.find()
//     .populate<{ author: Author }>("author", "name")
//     .sort({ createdAt: -1 });

//   const cookieStore = await cookies();
//   const token = cookieStore.get("token")?.value;

//   let userId: string | null = null;
//   if (token) {
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET!);
//       userId = (decoded as { userId: string }).userId;
//     } catch (err) {
//       console.log("Invalid token");
//     }
//   }

//   return (
//     <>
//       {/* Header */}
//       <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
//         <h1 className="text-xl font-bold">🔗 Mini LinkedIn</h1>
//         <nav className="flex gap-4 text-sm">
//           {userId ? (
//             <>
//               <a href={`/profile/${userId}`} className="hover:underline">
//                 My Profile
//               </a>
//               <a href="/logout" className="hover:underline text-red-100">
//                 Logout
//               </a>
//             </>
//           ) : (
//             <>
//               <a href="/login" className="hover:underline">
//                 Login
//               </a>
//               <a href="/register" className="hover:underline">
//                 Register
//               </a>
//             </>
//           )}
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-2xl mx-auto p-4 mt-6">
//         {userId ? (
//           <PostForm />
//         ) : (
//           <p className="text-gray-600 mb-4">Login to post something.</p>
//         )}

//         {posts.map((post: PostWithAuthor) => (
//           <PostCard key={post._id} post={post} showLink={!!userId} />
//         ))}
//       </main>
//       <Footer />
//     </>
//   );
// }

// import connectDB from "../../lib/mongoose";
// import Post from "@/models/Post";
// import "@/models/User";
// import PostCard from "@/components/PostCard";
// import PostForm from "@/components/PostForm";
// import Footer from "@/components/Footer";

// import jwt from "jsonwebtoken";
// import { headers } from "next/headers";
//  import { cookies } from "next/headers";
//  import { getUserFromCookie } from "../../lib/getUserFromCookie";

// interface Author {
//   _id: string;
//   name: string;
// }
// type Post = {
//   _id: string;
//   content: string;
//   createdAt: string;
// };
// interface PostWithAuthor {
//   _id: string;
//   content: string;
//   author: Author;
//   createdAt: Date;
//   updatedAt: Date;
// }

// interface DecodedToken {
//   userId: string;
//   name: string;
//   email: string;
//   iat: number;
// }

// export default async function Home() {
//   await connectDB();

//   const posts: PostWithAuthor[] = await Post.find()
//     .populate<{ author: Author }>("author", "name")
//     .sort({ createdAt: -1 });

// // ...
// // const cookieStore = cookies();
// // const token =  cookieStore.get("token")?.value || null;

// const user =  await getUserFromCookie();
// const userId = user?.userId ?? null;
// const userName = user?.name ?? null;

//   // let userId: string | null = null;
//   // let userName: string | null = null;

//   // if (user.token) {
//   //   try {
//   //     const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
//   //     userId = decoded.userId;
//   //     userName = decoded.name;
//   //   } catch (err) {
//   //     console.log("Invalid token");
//   //   }
//   // }

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 text-black">
//       {/* Header */}
//       <header className="bg-blue-500 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
//         <h1 className="text-xl font-bold tracking-wide">🔗 Mini LinkedIn</h1>

//         <nav className="flex items-center gap-6 text-sm font-medium">
//           {userId ? (
//             <>
//               <span className="hidden sm:inline">👋 Welcome, <strong>{userName}</strong></span>
//               <a
//                 href={`/profile/${userId}`}
//                 className="hover:underline hover:text-white transition-all duration-200"
//               >
//                 My Profile
//               </a>
//               <a
//                 href="/logout"
//                 className="hover:underline text-red-200 hover:text-white transition-all duration-200"
//               >
//                 Logout
//               </a>
//             </>
//           ) : (
//             <>
//               <a href="/login" className="hover:underline">
//                 Login
//               </a>
//               <a href="/register" className="hover:underline">
//                 Register
//               </a>
//             </>
//           )}
//         </nav>
//       </header>

//       {/* Content Section */}
//       <div className="flex flex-1 w-full max-w-6xl mx-auto px-4 pt-6 gap-6">
//         {/* Sidebar */}
//         {userId && (
//           <aside className="w-64 bg-white text-black rounded p-4 shadow-md h-fit sticky top-20">
//             <h2 className="text-lg font-semibold mb-4">Menu</h2>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href={`/profile/${userId}`} className="hover:text-blue-600">
//                   👤 View Profile
//                 </a>
//               </li>
//               <li>
//                 <a href={`/profile/${userId}`} className="hover:text-blue-600">
//                   📝 My Posts
//                 </a>
//               </li>
//               <li>
//                 <a href="#create-post" className="hover:text-blue-600">
//                   ➕ Create Post
//                 </a>
//               </li>
//             </ul>
//           </aside>
//         )}

//         {/* Main Feed */}
//         <main className="flex-1">
//           {userId ? (
//             <div id="create-post" className="mb-4">
//               <PostForm />
//             </div>
//           ) : (
//             <p className="text-gray-600 mb-4">Login to post something.</p>
//           )}

//           {posts.map((post: PostWithAuthor) => (
//             <PostCard key={post._id} post={post} showLink={!!userId} />
//           ))}
//         </main>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

import connectDB from "../../lib/mongoose";
import Post from "@/models/Post";
import "@/models/User";
import PostCard from "@/components/PostCard";
import PostForm from "@/components/PostForm";
import Footer from "@/components/Footer";

import { getUserFromCookie } from "../../lib/getUserFromCookie";

interface Author {
  _id: string;
  name: string;
}

interface PostWithAuthor {
  _id: string;
  content: string;
  author: Author;
  createdAt: Date;
  updatedAt: Date;
}

export default async function Home() {
  await connectDB();

  // const posts: PostWithAuthor[] = await Post.find()
  //   .populate<{ author: Author }>("author", "name")
  //   .sort({ createdAt: -1 });
  const posts = (await Post.find()
    .populate("author", "name")
    .sort({ createdAt: -1 })) as PostWithAuthor[];

  const user = await getUserFromCookie();

  const userId = user?.userId ?? null;
  const userName = user?.name ?? null;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-black">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold">🔗 Mini LinkedIn</h1>

        <nav className="flex gap-4 text-sm font-medium">
          {userId ? (
            <>
              <span className="hidden sm:inline">👋 {userName}</span>
              {/* <a href={`/profile/${userId}`} className="hover:underline">
                My Profile
              </a> */}
              <a
                href="/api/logout"
                 
                className="hover:underline text-red-200 hover:text-white transition-all duration-200"
              >
                Logout
              </a>
            </>
          ) : (
            <>
              <a href="/login" className="hover:underline">
                Login
              </a>
              <a href="/register" className="hover:underline">
                Register
              </a>
            </>
          )}
        </nav>
      </header>

      <div className="flex flex-1 w-full max-w-6xl mx-auto px-4 py-6 gap-6">
        {/* Sidebar */}
        {userId && (
          <aside className="w-64 bg-white text-black rounded p-4 shadow-md h-fit sticky top-20">
            <h2 className="text-lg font-semibold mb-4">Menu</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`/profile/${userId}`} className="hover:text-blue-600">
                  👤 View Profile
                </a>
              </li>
              <li>
                <a href={`/profile/${userId}`} className="hover:text-blue-600">
                  📝 My Posts
                </a>
              </li>
              {/* <li>
                <a href="#create-post" className="hover:text-blue-600">
                  ➕ Create Post
                </a>
              </li> */}
            </ul>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1">
          {userId ? (
            <div id="create-post" className="mb-4">
              <PostForm />
            </div>
          ) : (
            <p className="text-gray-500 mb-4">Login to post something.</p>
          )}

          {posts.map((post) => (
            <PostCard key={post._id} post={post} showLink={!!userId} />
          ))}
        </main>
      </div>

      {/* Sticky Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
