const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BackgroundColor = new Schema({
   color: {type: String }
});

const Background = mongoose.model("Color", BackgroundColor);

module.exports = Background;