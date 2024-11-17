import { INoteRepository } from "../../repositories/NoteRepository/NoteRepository.interface";

export class GetNotes {
  constructor(private noteRepository: INoteRepository) {}

  async execute(userId: string) {
    const notes = await this.noteRepository.getNotes(userId);
    return notes;
  }
}
