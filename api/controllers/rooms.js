// Rooms Controller
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var Room = require('../models/Room');

// INDEX: returns all users in db
router.get('/', function (req, res) {
  Room.find({}, function (err, rooms) {
    if (err) return res.status(500).send("There was a problem finding the rooms.");
    res.status(200).send(rooms);
  });
});

// NEW: creates a new user in db
router.post('/', function (req, res) {
  Room.create({
    username : req.body.username,
    isHost : req.body.isHost,
    voteCount : req.body.voteCount
  },
  function (err, room) {
    if (err) return res.status(500).send("There was a problem adding the information to the database.");
    res.status(200).send(room);
  });
});

// ROOM: find one by id
router.get('/:id', function (req, res) {
    Room.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the room.");
        if (!room) return res.status(404).send("No room found.");
        res.status(200).send(room);
    });
});

router.delete('/:id', function (req, res) {
    Room.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the room.");
        res.status(200).send("Room "+ Room.code +" was deleted.");
    });
});

module.exports = router;
