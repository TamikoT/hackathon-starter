// DEPENDENCIES
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const chalk = require('chalk'); // colors for terminal
// server
const express = require('express'); // web app framework
const http = require('http'); // data transfer over HTTP (built-in)
const socketIo = require('socket.io'); // create websockets
const errorHandler = require('errorhandler'); // handle server errors
const path = require('path'); // directory paths (built-in)
const flash = require('express-flash'); // flash without redirect
const port = process.env.PORT || 3001;
// data
const mongoose = require('mongoose'); // mongodb object modeling
const session = require('express-session'); // generate session data
const storeSession = require('connect-mongo')(session); // session data storage
// secrets
dotenv.load({ path: '.env' });

// SERVER SETUP | EXPRESS
const app = express();
const server = http.createServer(app);
// app.use(express.static('public')); // point to location of static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // look for JSON in response body
app.use(flash());
app.use(errorHandler());


// DATABASE SETUP | MONGO-DB
// define database outside of callback
var db;
// create connection to database - MongoDB w/ Mongoose
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, {useMongoClient: true} );
db = mongoose.connection;
db.on('error', function(err) {
  console.error(chalk.red.bold('Database connection error! Make sure MongoDB is running.'));
  process.exit();
});
db.once('open', function() {
  console.log(chalk.green.bold('Connected to MongoDB!'));
});
mongoose.Promise = global.Promise;

// ROUTES SETUP
// re-route `/`` to `/api`
app.get('/', function(req, res) {
  res.redirect('/api');
});

app.get('/api', function(req, res) {
  res.render(require('./api/index'));
});

var Room = require('./api/models/Room');
var User = require('./api/models/User');

app.get("/api/rooms", function(req, res) {
  Room.find({}, function(err, room) {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
});

app.post("/api/rooms", function(req, res) {
});

app.get("/api/users", function(req, res) {
  User.find({}, function(err, room) {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
});

app.post("/api/users", function(req, res) {
});

server.listen(port, function() {
  console.log(chalk.yellow('listening on *:3001'));
});

// WEBSOCKET SETUP | SOCKET.IO
// set up websocket our web server - socket.io
var io = socketIo(server);

// makes random 4 letter/number code
var generateRoomCode = function() {
  var code = '';
  var chars = '0123456789ABCDEFGHIJKLMNOPQURSTUVWXYZ';
  for ( var i = 0; i < 4; i ++ ) {
    code += chars.substr(Math.floor(Math.random() * (chars.length - 1)), 1);
  }
  return code;
};

// callback for the first time socket is made
io.on('connection', function(socket) {
  console.log(chalk.bgBlue('-> socket opened: ' + socket.id));

  // events emitted from client side
  socket.on('start', function(data){
    // join a room based on user input
    console.log('start event handler server-side');
    console.log('data in function: ' + data);

    // create a new User with the username
    var newUser = new User( {
      username: data.username,
      isHost: true,
    });
    console.log(newUser);

    newUser.save(function (err, newUser) {
      if (err) return console.error(chalk.bgRed(err));
      // console.log('New room ' + newUser.username + ' created!');
    });

    data.code = generateRoomCode();

    var newRoom = new Room({
      code: data.code,
      _hostID: newUser._id,
    });
    console.log(newRoom);

    newRoom.save(function (err, newRoom) {
      if (!err) {
        // host joins the room themselves after successfully created
        socket.join(newRoom.code);
        console.log('New room ' + newRoom.code + ' created!');
        // emit message back = still just host in the room
        io.sockets.in(newRoom.code).emit('roomCreated', data);
      } else {
      return console.error(chalk.bgRed(err));
      // TODO: do something if same code happens to be generated
      // search for generated room code, if it exists, regenerate
      }
    });
  });

  socket.on('enter', function(data){
    // ENTER a room based on user input

    var roomQuery = {'code': data.code};

    // check if room already exists on database
    var foundRoom = Room.find(
      roomQuery, // query from input
      function(err, room) { // callback
        if (err) {
          return errorHandler(err);
        } else if (room.length > 0) {
          console.log(room);
          return room;
        } else {
          console.log('oops, room not found');
          // TODO: alert user and prompt to re-enter info
        }
      }
    );

    // if the room exists, create a new User in the room
    if ( foundRoom.length > 0 ) {
      console.log(foundRoom[0]);
      socket.join(data.code);
      // create a new User with the username
      var newUser = new User( {
        username: data.username,
        isHost: false,
      });
      console.log(data.username + " joined Room " + data.code);
      console.log(newUser);
      newUser.save(function (err, newUser) {
        if (err) return console.error(chalk.bgRed(err));
      });
    }
  });

  socket.on('chat', function(data){
    // sending data back to ALL sockets
    io.sockets.in(data.room).emit('chat', data);
  });
});
