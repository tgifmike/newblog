import { getPost } from "@/lib/db_utilitites";

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

      {/* content here */}
      <div className="text-lg text-gray-700 mt-5 font-serif text-justify leading-loose">
        {post?.content}
      </div>
    </div>
  );
}
