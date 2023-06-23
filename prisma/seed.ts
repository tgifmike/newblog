import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const numberOfBlogPosts = 10;

const createFakeBlogPost = async () => {
  return await prisma.post.create({
    data: {
      title: faker.lorem.sentence(),
      slug: faker.lorem.slug(),
      authorId: 1,
      preview: faker.lorem.paragraph(),
      content: faker.lorem.paragraphs(5),
      published: faker.datatype.boolean(0.75),
      image: faker.image.url(),
    },
  });
};

async function main() {
  Array.from({ length: numberOfBlogPosts }).map(async () =>
    createFakeBlogPost()
  );
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
