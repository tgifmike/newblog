export type Posts = {
  id: string;
  createdAt: Date;
  title: string;
  slug: string;
  image: string;
  preview: string;
  content: string;
  published: boolean;
  updatedAt: Date;
  authorId: BigInteger;
};
