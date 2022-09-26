const express = require("express");
const noteRouter = express.Router()
const auth = require("../middlewares/auth")
const { createNote, updateNote, deleteNote, getNotes } = require("../controllers/noteController");

noteRouter.get("/", auth, getNotes);

noteRouter.post("/", auth, createNote);

noteRouter.delete("/:id", auth, deleteNote);

noteRouter.put("/:id", auth, updateNote);

module.exports = noteRouter;