import { getPosts } from "@/lib/db_utilitites";
import React from "react";

export default async function AllblogPage() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-xl text-slate-600">All Blog Posts</h1>

      {posts.map((post) => (
        <div
          key={post.id}
          className="border-2 border-slate-900 rounded-lg p-2 m-2 hover:scale-105 hover:border-blue-500 transition"
        >
          <h3 className="text-lg text-red-400 font-bold">{post.title}</h3>
          <p className="text-md">{post.preview}</p>
        </div>
      ))}
    </div>
  );
}
