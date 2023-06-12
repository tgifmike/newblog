import { PrismaClient } from "@prisma/client";

// const globalForPrisma = global as unknown as {
//   posts: any;
//   prisma: PrismaClient;
// };

// export const prisma = globalForPrisma || new PrismaClient({ log: ["query"] });

// if (process.env.NODE_ENV! == "production") globalForPrisma.prisma;

const prisma: PrismaClient = new PrismaClient();
export default prisma;
