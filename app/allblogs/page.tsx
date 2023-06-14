import { getPosts } from "@/lib/db_utilitites";
import React from "react";

export default async function AllblogPage() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-xl text-slate-600">All Blog Posts</h1>

      {posts?.map((post) => (
        <div className="border-2 border-slate-900 rounded-lg p-2 m-2">
          <div key={post.id}>
            <h3 className="text-lg text-red-400">{post.title}</h3>
            <p className="text-md">{post.preview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
