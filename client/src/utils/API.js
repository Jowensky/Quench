import axios from "axios";

export default {
  waterPlant: function() {
    return axios.get("https://69.120.124.59:5050/buzz");
  },
  timeWatered: function(obj) {
    return axios.post("/api/water", obj);
  },
  getDates: function() {
    return axios.get("/api/water");
  },
  isPlantDry: function() {
    return axios.get("https://69.120.124.59:5050/sensor");
  },
  saveNotes: function(notes) {
    return axios.post("/api/notes", notes);
  },
  fetchNotes: function() {
    return axios.get("/api/notes")
  },
  deleteNote: function(note) {
    return axios.delete(`/api/notes/${note.mongo}/${note.note}`)
  },
  savebackground: function(color) {
    return axios.post(`/api/color`, color)
  },
  getbackground: function(color) {
    return axios.get(`/api/color`)
  },
};