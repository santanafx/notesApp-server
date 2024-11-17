import { INoteRepository } from "../repositories/INoteRepository";

export class GetNotes {
  constructor(private noteRepository: INoteRepository) {}

  async execute(userId: string) {
    const notes = await this.noteRepository.getNotes(userId);
    return notes;
  }
}
