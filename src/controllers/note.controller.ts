import prisma from "../db";

export const createNewNote = async (req, res, next) => {
  try {
    await prisma.note.create({
      data: {
        text: req.body.text,
        noteOwner: {
          connect: {
            id: req.body.userId,
          },
        },
      },
    });

    res.json({ message: "note created" });
  } catch (error) {
    console.log("createNewNote", error);
    error.type = "input";
    next(error);
  }
};

export const getNotes = async (req, res, next) => {
  try {
    const notes = await prisma.note.findMany({
      where: {
        noteOwner: {
          id: req.body.userId,
        },
      },
    });
    res.json({ message: "notes", notes });
  } catch (error) {
    console.log("getNotes", error);
    error.type = "input";
    next(error);
  }
};

export const deleteNotes = async (req, res, next) => {
  try {
    await prisma.note.deleteMany({
      where: {
        id: {
          in: req.body.ids,
        },
        noteOwner: {
          id: req.body.userId,
        },
      },
    });
    res.json({ message: "notes deleted" });
  } catch (error) {
    console.log("deleteNotes", error);
    error.type = "input";
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const updatedNote = await prisma.note.update({
      where: {
        id: req.body.noteId,
        noteOwner: {
          id: req.body.userId,
        },
      },
      data: { text: req.body.text },
    });

    res.json({ message: "Note updated successfully", updatedNote });
  } catch (error) {
    console.error("updateNote", error);
    error.type = "input";
    next(error);
  }
};

export const updateNotes = async (req, res, next) => {
  try {
    const notesToUpdate = req.body.notes;
    const updatedNotes = await Promise.all(
      notesToUpdate.map((note) => {
        return prisma.note.update({
          where: {
            id: note.id,
            noteOwner: {
              id: req.body.userId,
            },
          },
          data: { text: note.text },
        });
      })
    );
    res.json({ message: "Notes updated successfully", updatedNotes });
  } catch (error) {
    console.error("updateNotes", error);
    error.type = "input";
    next(error);
  }
};
