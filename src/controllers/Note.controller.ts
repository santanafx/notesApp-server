import { NoteRepository } from "../repositories/NoteRepository/NoteRepository";
import { CreateNewNote } from "../services/NoteServices/CreateNewNote.service";
import { DeleteNotes } from "../services/NoteServices/DeleteNotes.service";
import { GetNotes } from "../services/NoteServices/GetNotes.service";
import { UpdateNotes } from "../services/NoteServices/UpdateNotes.service";

export class NoteController {
  async createNewNote(req, res) {
    const noteRepository = new NoteRepository();
    const createNewNote = new CreateNewNote(noteRepository);
    try {
      const note = await createNewNote.execute(req.body.text, req.body.userId);
      res.json({ message: "note created", note: note });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async getNotes(req, res) {
    const noteRepository = new NoteRepository();
    const getNotes = new GetNotes(noteRepository);
    try {
      const notes = await getNotes.execute(req.params.userId);
      res.json({ message: "notes", notes: notes });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async deleteNotes(req, res) {
    const noteRepository = new NoteRepository();
    const deleteNotes = new DeleteNotes(noteRepository);
    try {
      const notes = await deleteNotes.execute(req.body.ids, req.body.userId);
      res.json({ message: "notes deleted", notes });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async updateNotes(req, res) {
    const noteRepository = new NoteRepository();
    const updateNotes = new UpdateNotes(noteRepository);
    try {
      const notes = await updateNotes.execute(req.body);
      res.json({ message: "notes updated", notes });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
