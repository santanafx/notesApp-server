import { INoteRepository } from "../repositories/INoteRepository";

export class DeleteNotes {
  constructor(private noteRepository: INoteRepository) {}

  async execute(noteIds: string[], userId: string) {
    return await this.noteRepository.deleteNotes(noteIds, userId);
  }
}
