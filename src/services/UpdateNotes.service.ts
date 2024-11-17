import { INoteRepository, notes } from "../repositories/INoteRepository";

export class UpdateNotes {
  constructor(private noteRepository: INoteRepository) {}

  async execute(notes: notes) {
    return await this.noteRepository.updateNotes(notes);
  }
}
