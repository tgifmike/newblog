import prisma from "@/lib/prisma";

export async function getPost(slug: string) {
  const post = await prisma.post.findFirst({
    where: {
      slug: slug,
    },
  });
  return post;
}

export async function getPosts() {
  const posts = await prisma.post.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
  return posts;
}
