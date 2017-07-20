// Rooms Controller
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var Room = require('../models/Room');

// READ ALL: returns all rooms in db
router.get('/', (req, res) => {
  Room.find({}, function (err, rooms) {
    if (err) return res.status(500).send("There was a problem finding the rooms.");
    res.status(200).send(rooms);
  });
});

// READ ONE: find one room by id
router.get('/:id', (req, res) => {
  Room.findById(req.params.id, function (err, room) {
    if (err) return res.status(500).send("There was a problem finding the room.");
    if (!room) return res.status(404).send("No room found.");
    res.status(200).send(room);
  });
});

// CREATE: creates a new room in db
router.post('/', (req, res) => {
  Room.create({
     code: req.body.code,
     _hostID: req.body._hostID
  }, function (err, room) {
    if (err) return res.status(500).send("There was a problem adding the information to the database.");
    res.status(200).send(room);
  });
});

// UPDATE: edit an existing room
router.put('/:id', (req, res) => {
  Room.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, room) {
    if (err) return res.status(500).send("There was a problem updating the room.");
    res.status(200).send(room);
  });
});

// DELETE: delete one room by id
router.delete('/:id', (req, res) => {
  Room.findByIdAndRemove(req.params.id, function (err, room) {
    if (err) return res.status(500).send("There was a problem deleting the room.");
    res.status(200).send("Room "+ Room.code +" was deleted.");
  });
});

module.exports = router;
