const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Watered = new Schema({
    title: { type: String, required: true },
    date: { type: Date, default: Date.now}
});

const Water = mongoose.model("Water", Watered);

module.exports = Water;