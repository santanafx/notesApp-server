import { INoteRepository } from "../../repositories/NoteRepository/NoteRepository.interface";

export class DeleteNotes {
  constructor(private noteRepository: INoteRepository) {}

  async execute(noteIds: string[], userId: string) {
    return await this.noteRepository.deleteNotes(noteIds, userId);
  }
}
