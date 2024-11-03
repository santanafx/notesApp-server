import prisma from "../db";

export const createNewNote = async (req, res, next) => {
  try {
    await prisma.note.create({
      data: {
        text: req.body.text,
        note: {
          connect: {
            id: req.user.id,
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
        note: {
          id: req.user.id,
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
        note: {
          id: req.user.id,
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
