// Users Controller
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var User = require('../models/User');

// INDEX: returns all users in db
router.get('/', function (req, res) {
  User.find({}, function (err, users) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(users);
  });
});
// NEW: creates a new user in db
router.post('/', function (req, res) {
  User.create({
    username : req.body.name,
    isHost : req.body.email,
    voteCount : req.body.password
  },
  function (err, user) {
    if (err) return res.status(500).send("There was a problem adding the information to the database.");
    res.status(200).send(user);
  });
});

module.exports = router;
