import { Router } from "express";
import { body } from "express-validator";
import {
  createNewNote,
  deleteNotes,
  getNotes,
} from "./controllers/note.controller";
import { handleInputsErrors } from "./modules/middleware";

const router = Router();

router.get("/getNotes", getNotes);
router.post(
  "/createNewNote",
  body("text").isString(),
  handleInputsErrors,
  createNewNote
);
router.delete(
  "/deleteNotes",
  body("ids").isArray(),
  handleInputsErrors,
  deleteNotes
);

export default router;
