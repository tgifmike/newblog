import { getFirstSixPosts } from "@/lib/db_utilitites";
import Link from "next/link";
import React from "react";

export default async function HomePage() {
  const sixPosts = await getFirstSixPosts();
  return (
    <main>
      <h1 className="text-5xl font-extrabold text-grey-800">
        Welcome to the Manager Life
      </h1>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sixPosts.map((sixPosts) => (
          <Link
            href={`/blogs/${sixPosts.slug}`}
            key={sixPosts.id}
            className="border-2 border-grey-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            <h3 className="mt-2 text-lg font-extrabold text-red-400">
              {sixPosts?.title}
            </h3>
            <p className="text-md text-gray-700 mt-5">{sixPosts?.preview}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
