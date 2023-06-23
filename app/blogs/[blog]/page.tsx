import { getPost } from "@/lib/db_utilitites";
import Image from "next/image";

export default async function Blog({ params }: { params: { blog: string } }) {
  const slug = params.blog;
  const post = await getPost(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-red-600 text-5xl drop-shaddow fornt-extrabold">
          {post?.title}
        </h1>
      </header>
      {/* image here */}

      <Image
        src={post?.image}
        alt={`${post?.title}`}
        width={750}
        height={400}
        className="mt-10 border-2 border-grey-700 object-cover rounded-xl"
      />

      {/* content here */}
      <div className="text-lg text-gray-700 mt-5 font-serif text-justify leading-loose">
        {post?.content}
      </div>
    </div>
  );
}
