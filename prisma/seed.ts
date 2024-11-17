import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  await prisma.note.deleteMany();
  await prisma.user.deleteMany();
  const santanafx = await prisma.user.create({
    data: {
      email: "santanafx@gmail.com",
      password: await bcrypt.hash("123", 10),
    },
  });
  await prisma.note.create({
    data: {
      id: "11111-111-111-1111",
      text: "hello world",
      noteOwnerId: santanafx.id,
    },
  });
  await prisma.note.create({
    data: {
      id: "22222-2222-222-22222",
      text: "hello world",
      noteOwnerId: santanafx.id,
    },
  });
}

main();
