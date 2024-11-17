import { Note } from "../../entities/Note.entity";

export interface Notes {
  userId: string;
  notesData: { id: string; text: string }[];
}
export interface INoteRepository {
  createNewNote(text: string, userId: string): Promise<Note>;
  getNotes(userId: string): Promise<Note[]>;
  deleteNotes(noteIds: string[], userId: string): Promise<void>;
  updateNotes(notes: Notes): Promise<Note[]>;
}
