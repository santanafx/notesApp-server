import { Router } from "express";
import { body } from "express-validator";
import { NoteController } from "./controllers/NoteController";
import { handleInputsErrors } from "./middlewares/inputErrors";

const router = Router();
const noteController = new NoteController();

router.get(
  "/getNotes",
  body("userId").isString(),
  handleInputsErrors,
  noteController.getNotes
);
router.post(
  "/createNewNote",
  body("text").isString(),
  body("userId").isString(),
  handleInputsErrors,
  noteController.createNewNote
);
router.delete(
  "/deleteNotes",
  body("ids").isArray(),
  body("userId").isString(),
  handleInputsErrors,
  noteController.deleteNotes
);
router.put(
  "/updateNotes",
  body("userId").isString(),
  handleInputsErrors,
  noteController.updateNotes
);

export default router;
