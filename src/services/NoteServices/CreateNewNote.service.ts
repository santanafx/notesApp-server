import { INoteRepository } from "../../repositories/NoteRepository/NoteRepository.interface";

export class CreateNewNote {
  constructor(private noteRepository: INoteRepository) {}

  async execute(text: string, userId: string) {
    return await this.noteRepository.createNewNote(text, userId);
  }
}
