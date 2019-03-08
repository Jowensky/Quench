const router = require("express").Router();
const NoteController = require("../../controllers/Controller");

// Matches with "/api/notes"
router.route("/")
  .get(NoteController.findAllNotes)
  .post(NoteController.createNote)

// Matches with "/api/notes/:id"
router
  .route("/:id")
  .get(NoteController.findNoteById)

router 
  .route("/:_id/:id")
  .delete(NoteController.delete)

module.exports = router;