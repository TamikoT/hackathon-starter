const mongoose = require('mongoose');
var Room = require('../models/Room');

// middleware functions for Room routes
exports.list_all_rooms = function(req, res) {
  Room.find({}, function(err, room) {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

exports.create_a_room = function(req, res) {
  var new_room = new Room(req.body);
  new_room.save(function(err, room) {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

exports.read_a_room = function(req, res) {
  Room.findById(req.params.roomId, function(err, room) {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

exports.update_a_room = function(req, res) {
  Room.findOneAndUpdate({_id: req.params.roomId}, req.body, {new: true}, function(err, room) {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

exports.delete_a_room = function(req, res) {
  Room.remove({
    _id: req.params.roomId
  }, function(err, room) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Room successfully deleted' });
  });
};
