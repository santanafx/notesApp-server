import { NoteRepository } from "../repositories/NoteRepository/NoteRepository";
import { CreateNewNote } from "../services/NoteServices/CreateNewNote.service";
import { DeleteNotes } from "../services/NoteServices/DeleteNotes.service";
import { GetNotes } from "../services/NoteServices/GetNotes.service";
import { UpdateNotes } from "../services/NoteServices/UpdateNotes.service";

export class NoteController {
  createNewNote(req, res) {
    const noteRepository = new NoteRepository();
    const createNewNote = new CreateNewNote(noteRepository);
    try {
      const note = createNewNote.execute(req.body.text, req.body.userId);
      res.json({ message: "note created", note });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  getNotes(req, res) {
    const noteRepository = new NoteRepository();
    const getNotes = new GetNotes(noteRepository);
    try {
      const notes = getNotes.execute(req.body.userId);
      res.json({ message: "notes", notes });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  deleteNotes(req, res) {
    const noteRepository = new NoteRepository();
    const deleteNotes = new DeleteNotes(noteRepository);
    try {
      const notes = deleteNotes.execute(req.body.ids, req.body.userId);
      res.json({ message: "notes deleted", notes });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  updateNotes(req, res) {
    const noteRepository = new NoteRepository();
    const updateNotes = new UpdateNotes(noteRepository);
    try {
      const notes = updateNotes.execute(req.body);
      res.json({ message: "notes updated", notes });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
