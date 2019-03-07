const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Notes = new Schema({
   state: {type: Array, required: true }
});

const Note = mongoose.model("Note", Notes);

module.exports = Note;