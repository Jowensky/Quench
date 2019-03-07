const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');
// Use morgan logger for logging requests
const router = require("./routes");

app.use(logger("dev"));

const PORT =  process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.get("*", function(req,res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use(router);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Water", { useNewUrlParser: true });
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});