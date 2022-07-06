const express = require("express");
const router = express.Router();
const noteCtrl = require("../../controllers/api/notes");

// GET /api/notes
router.get("/", noteCtrl.index);
// POST /api/notes
router.post("/newNote", noteCtrl.create);
// DELETE /api/notes/:id
router.delete("/deleteNote/:id", noteCtrl.deleteNote);

module.exports = router;
