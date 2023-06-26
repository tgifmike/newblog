import { getFirstSixPosts } from "@/lib/db_utilitites";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default async function HomePage() {
  const sixPosts = await getFirstSixPosts();

  return (
    <main>
      <h1 className="text-5xl font-extrabold text-grey-800">
        Welcome to the Manager Life
      </h1>
      <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sixPosts.map((sixPosts) => (
          <div className="border-2 border-grey-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
            <h3 className="mt-2 text-lg font-extrabold text-red-400">
              {sixPosts.title}
            </h3>
            {sixPosts.image && (
              <Image
                src={sixPosts.image}
                alt={sixPosts.title}
                width={750}
                height={400}
                className="object-cover rounded-lg border-2 border-gray-500"
              />
            )}
            <p className="text-md text-gray-700 text-justify mt-5">
              {sixPosts?.preview}
              <Link
                href={`./blogs/${sixPosts.slug}`}
                key={sixPosts.id}
                className="text-red-700 p-1 hover:scale-105 transition"
              >
                Read More...
              </Link>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
