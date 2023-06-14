import { getPosts } from "@/lib/db_utilitites";
import React from "react";

export default async function AllblogPage() {
  const posts = await getPosts();
  return (
    <div>
      <h1>All Blog Posts</h1>
      <div>
        {posts.map((post) => (
          <h3>{post.title}</h3>
        ))}
      </div>
    </div>
  );
}
