import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const post = await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "This is my test title",
      slug: "This-is-my-test-slug",
      authorId: 1,
      preview:
        "this is my test previw. this is my test previw. this is my test previw.this is my test previviethis is my test previw.this is my test previw.this is my test previw.this is my test previw. ",
      content:
        "this is my test previw. this is my test previw. this is my test previw.this is my test previviethis is my test previw.this is my test previw.this is my test previw.this is my test previw.this is my test previw. this is my test previw. this is my test previw.this is my test previviethis is my test previw.this is my test previw.this is my test previw.this is my test previw.this is my test previw. this is my test previw. this is my test previw.this is my test previviethis is my test previw.this is my test previw.this is my test previw.this is my test previw. this is my test previw. this is my test previw. this is my test previw.this is my test previviethis is my test previw.this is my test previw.this is my test previw.this is my test previw.this is my test previw. this is my test previw. this is my test previw.this is my test previviethis is my test previw.this is my test previw.this is my test previw.this is my test previw.this is my test previw. this is my test previw. this is my test previw.this is my test previviethis is my test previw.this is my test previw.this is my test previw.this is my test previw.",
    },
  });
  console.log(post);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
