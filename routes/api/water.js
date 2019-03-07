const router = require("express").Router();
const waterController = require("../../controllers/Controller");

// Matches with "/api/books"
router.route("/")
  .get(waterController.findAll)
  .post(waterController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(waterController.findById)

module.exports = router;