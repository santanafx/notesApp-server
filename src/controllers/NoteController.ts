import { NoteRepository } from "../repositories/NoteRepository";
import { CreateNewNote } from "../services/CreateNewNote.service";
import { DeleteNotes } from "../services/DeleteNotes.service";
import { GetNotes } from "../services/GetNotes.service";
import { UpdateNotes } from "../services/UpdateNotes.service";

export class NoteController {
  async createNewNote(req, res) {
    const noteRepository = new NoteRepository();
    const createNewNote = new CreateNewNote(noteRepository);
    const note = await createNewNote.execute(req.body.text, req.body.userId);
    res.json({ message: "note created", note });
  }

  async getNotes(req, res) {
    const noteRepository = new NoteRepository();
    const getNotes = new GetNotes(noteRepository);
    const notes = await getNotes.execute(req.body.userId);
    res.json({ message: "notes", notes });
  }

  async deleteNotes(req, res) {
    const noteRepository = new NoteRepository();
    const deleteNotes = new DeleteNotes(noteRepository);
    const notes = await deleteNotes.execute(req.body.ids, req.body.userId);
    res.json({ message: "notes deleted", notes });
  }

  async updateNotes(req, res) {
    const noteRepository = new NoteRepository();
    const updateNotes = new UpdateNotes(noteRepository);
    const notes = await updateNotes.execute(req.body);
    res.json({ message: "notes updated", notes });
  }
}
