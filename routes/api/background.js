const router = require("express").Router();
const BackgroundController = require("../../controllers/Controller");

// Matches with "/api/books"
router.route("/")
  .get(BackgroundController.findAllBackground)
  .post(BackgroundController.createBackground)

module.exports = router;