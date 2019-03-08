const router = require("express").Router();
const BackgroundController = require("../../controllers/Controller");

// Matches with "/api/color"
router.route("/")
  .get(BackgroundController.findAllBackground)
  .post(BackgroundController.createBackground)

module.exports = router;