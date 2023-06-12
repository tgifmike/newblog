import prisma from "@/lib/prisma";
import { Blog } from "@/types/Blog";

type Props = {
  params: { blog: string };
};

export default async function Blog({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);

  return (
    <div>
      <h1>{blog.title}</h1>
    </div>
  );
}

export async function getBlog(slug: string): Promise<Blog> {
  const blog = await prisma.post.findMany();
  console.log(blog);

  //   return {
  //     <div>{blog.title}</div>
  //   };
}
