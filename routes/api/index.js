const router = require("express").Router();
const waterRoutes = require("./water");
const noteRoutes = require("./notes");
const backgroundRoutes = require("./background")

router.use("/water", waterRoutes)
router.use("/notes", noteRoutes)
router.use("/color", backgroundRoutes)


module.exports = router;
