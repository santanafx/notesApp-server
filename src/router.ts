import { Router } from "express";
import { body } from "express-validator";
import { createNewUser } from "./handlers/user";
import { handleInputsErrors } from "./modules/middleware";

const router = Router();

router.post(
  "/signup",
  body("email").isString(),
  body("password").isString(),
  handleInputsErrors,
  createNewUser
);

export default router;
