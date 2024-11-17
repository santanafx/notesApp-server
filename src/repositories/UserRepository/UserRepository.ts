import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../db";

export class UserRepository {
  async findUser(email: string) {
    const foundUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return foundUser;
  }
  async createNewUser(email: string, password: string) {
    const createdUser = await prisma.user.create({
      data: {
        email: email,
        password: await bcrypt.hash(password, 10),
      },
    });
    return createdUser;
  }

  async login(email: string) {
    const foundUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return foundUser;
  }

  async comparePasswords(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }

  async createJWT(id: string, username: string) {
    const token = jwt.sign(
      {
        id: id,
        username: username,
      },
      process.env.JWT_SECRET
    );
    return token;
  }
}
