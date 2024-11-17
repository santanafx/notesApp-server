export class Note {
  id: string;
  text: string;
  noteOwner: string;

  constructor(id: string, text: string, noteOwner: string) {
    this.id = id;
    this.text = text;
    this.noteOwner = noteOwner;
  }
}
