import { INoteRepository } from "../repositories/INoteRepository";

export class CreateNewNote {
  constructor(private noteRepository: INoteRepository) {}

  async execute(text: string, userId: string) {
    return await this.noteRepository.createNewNote(text, userId);
  }
}
