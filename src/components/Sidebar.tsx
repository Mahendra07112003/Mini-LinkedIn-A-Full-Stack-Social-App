"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ userId }: { userId: string }) {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `block px-4 py-2 rounded hover:bg-blue-100 transition-all duration-200 ${
      pathname === href ? "bg-blue-100 text-blue-800 font-semibold" : ""
    }`;

  return (
    <aside className="w-full sm:w-64 bg-white shadow-md rounded-md p-4 h-fit sticky top-20">
      <h2 className="text-lg font-bold mb-4 text-blue-700">Menu</h2>
      <nav className="flex flex-col gap-2">
        <Link href={`/profile/${userId}`} className={linkClasses(`/profile/${userId}`)}>
          View Profile
        </Link>
        <Link href="/myposts" className={linkClasses("/myposts")}>
          My Posts
        </Link>
        <Link href="/" className={linkClasses("/")}>
          Home Feed
        </Link>
        <Link href="/logout" className="block px-4 py-2 mt-4 text-red-600 hover:underline">
          Logout
        </Link>
      </nav>
    </aside>
  );
}
