const router = require("express").Router();
const waterController = require("../../controllers/Controller");

// Matches with "/api/water"
router.route("/")
  .get(waterController.findAll)
  .post(waterController.create);

// Matches with "/api/water/:id"
router
  .route("/:id")
  .get(waterController.findById)

module.exports = router;