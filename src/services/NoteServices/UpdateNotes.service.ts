import {
  INoteRepository,
  Notes,
} from "../../repositories/NoteRepository/NoteRepository.interface";

export class UpdateNotes {
  constructor(private noteRepository: INoteRepository) {}

  async execute(notes: Notes) {
    return await this.noteRepository.updateNotes(notes);
  }
}
