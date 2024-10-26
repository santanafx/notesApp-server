import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        password: await hashPassword(req.body.password),
      },
    });

    res.json({ message: "user created" });
  } catch (error) {
    console.log("createNewUser", error);
    error.type = "input";
    next(error);
  }
};

export const login = async (req, res, next) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "invalid password" });
    return;
  }

  const token = createJWT(user);
  res.json({ token: token });
};
