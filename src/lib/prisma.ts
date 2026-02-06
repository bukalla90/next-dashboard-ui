import { PrismaClient, UserSex, BloodType, Day } from "@/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!, // make sure it's set
  schema: "public", // optional, default is public
});

export const prisma = new PrismaClient({
  adapter,
  log: ["query"], // optional
});
