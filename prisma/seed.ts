import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.note.deleteMany();
  await prisma.user.deleteMany();

  const santanafx = await prisma.user.create({
    data: {
      email: "santanafx@hotmail.com",
      password: "123",
    },
  });

  await prisma.note.create({
    data: {
      id: "11111-111-111-1111",
      text: "hello world",
      user: {
        connect: {
          id: santanafx.id,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      id: "22222-2222-222-22222",
      text: "hello world",
      user: {
        connect: {
          id: santanafx.id,
        },
      },
    },
  });
}

main();
