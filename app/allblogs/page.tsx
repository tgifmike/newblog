import { getPosts } from "@/lib/db_utilitites";
import Link from "next/link";
import React from "react";

export default async function AllblogPage() {
  const posts = await getPosts();
  return (
    <main>
      <h1 className="text-5xl font-extrabold text-grey-800">All Blog Posts</h1>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            href={`/blogs/${post.slug}`}
            key={post.id}
            className="border-2 border-slate-900 rounded-lg p-1 m-1 hover:scale-105 hover:border-blue-500 transition"
          >
            <h3 className="mt-2 text-lg font-extrabold text-red-400">
              {post.title}
            </h3>
            <p className="text-md">{post.preview}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
