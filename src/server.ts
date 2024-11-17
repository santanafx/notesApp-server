import cors from "cors";
import express from "express";
import { body } from "express-validator";
import morgan from "morgan";
import { UserController } from "./controllers/User.controller";
import { protect } from "./middlewares/auth";
import router from "./router";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userControler = new UserController();
app.post(
  "/createNewUser",
  body("email").isEmail(),
  body("password").isString(),
  userControler.create
);
app.post(
  "/login",
  body("email").isEmail(),
  body("password").isString(),
  userControler.login
);

app.use(protect, router);

app.use((err, req, res, next) => {
  if (err.type === "auth") {
    res.status(401).json({ message: "unauthorized" });
  } else if (err.type === "input") {
    res.status(400).json({ message: "invalid input" });
  } else {
    res.status(500).json({ message: "unknown error" });
  }
});

export default app;
