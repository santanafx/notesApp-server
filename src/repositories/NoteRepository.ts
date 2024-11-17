import prisma from "../db";
import { Note } from "../entities/Note.entity";
import { notes } from "./INoteRepository";

export class NoteRepository {
  async createNewNote(text: string, userId: string) {
    const note = await prisma.note.create({
      data: {
        text: text,
        noteOwner: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return new Note(note.id, note.text, userId);
  }

  async getNotes(userId: string) {
    const notes = await prisma.note.findMany({
      where: {
        noteOwner: {
          id: userId,
        },
      },
    });
    return notes.map((note) => new Note(note.id, note.text, note.noteOwnerId));
  }

  async deleteNotes(noteIds: string[], userId: string) {
    await prisma.note.deleteMany({
      where: {
        id: {
          in: noteIds,
        },
        noteOwner: {
          id: userId,
        },
      },
    });
  }

  async updateNotes(notes: notes) {
    console.log(notes);
    const updatedNotes = await Promise.all(
      notes.notesData.map((note) => {
        return prisma.note.update({
          where: {
            id: note.id,
            noteOwner: {
              id: notes.userId,
            },
          },
          data: { text: note.text },
        });
      })
    );
    return updatedNotes.map(
      (note) => new Note(note.id, note.text, note.noteOwnerId)
    );
  }
}
