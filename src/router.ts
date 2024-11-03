import { Router } from "express";
import { body } from "express-validator";
import { createNewNote, getNotes } from "./controllers/note.controller";
import { handleInputsErrors } from "./modules/middleware";

const router = Router();

router.post(
  "/createNewNote",
  body("text").isString(),
  handleInputsErrors,
  createNewNote
);

router.get("/getNotes", getNotes);

export default router;
