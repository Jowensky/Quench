const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Water
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Water
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Water
      .create(req.body)
      .then(function(obj) {
        res.json(obj)
      })
      .catch(function(err) {
        res.status(422).json(err)
      });
  },
  findAllNotes: function(req, res) {
    db.Note
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findNoteById: function(req, res) {
    db.Water
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createNote: function(req, res) {
    db.Note
      .create(req.body)
      .then(function(obj) {
        res.json(obj)
      })
      .catch(function(err) {
        res.status(422).json(err)
      });
  },
  delete: function(req, res) {
    db.Note
      .updateOne({ _id: req.params._id },
      { $pull: { state: { id: req.params.id } } } )
      .then(function(dbModel)  {dbModel.remove()})
      .then(function(dbModel) {res.json(dbModel)})
      .catch(function(err) {res.status(422).json(err)})
  },
  createBackground: function(req, res) {
    db.Background
      .create(req.body)
      .then(function(obj) {
        res.json(obj)
      })
      .catch(function(err) {
        res.status(422).json(err)
      });
  },
  findAllBackground: function(req, res) {
    db.Background
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};