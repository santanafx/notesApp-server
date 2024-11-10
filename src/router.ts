import { Router } from "express";
import { body } from "express-validator";
import {
  createNewNote,
  deleteNotes,
  getNotes,
  updateNote,
  updateNotes,
} from "./controllers/note.controller";
import { handleInputsErrors } from "./modules/middleware";

const router = Router();

router.get(
  "/getNotes",
  body("userId").isString(),
  handleInputsErrors,
  getNotes
);
router.post(
  "/createNewNote",
  body("text").isString(),
  body("userId").isString(),
  handleInputsErrors,
  createNewNote
);
router.delete(
  "/deleteNotes",
  body("ids").isArray(),
  body("userId").isString(),
  handleInputsErrors,
  deleteNotes
);
router.put(
  "/updateNote",
  body("text").isString(),
  body("userId").isString(),
  handleInputsErrors,
  updateNote
);
router.put(
  "/updateNotes",
  body("userId").isString(),
  handleInputsErrors,
  updateNotes
);

export default router;
