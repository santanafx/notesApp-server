import cors from "cors";
import express from "express";
import morgan from "morgan";
import { createNewUser, login } from "./handlers/user";
import { protect } from "./modules/auth";
import router from "./router";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/createNewUser", createNewUser);
app.post("/login", login);

app.use("/", protect, router);

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
