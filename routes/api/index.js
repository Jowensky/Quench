const router = require("express").Router();
const waterRoutes = require("./water");
const noteRoutes = require("./notes");
const backgroundRoutes = require("./background")
const path = require("path");

// API Routes
router.use("/water", waterRoutes)
router.use("/notes", noteRoutes)
router.use("/color", backgroundRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;
