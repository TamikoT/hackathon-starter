// DEPENDENCIES
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const chalk = require('chalk'); // colors for terminal
// web server
const express = require('express'); // web app framework
const http = require('http'); // data transfer over HTTP (built-in)
const socketIo = require('socket.io'); // create websockets
const errorHandler = require('errorhandler'); // handle server errors
const path = require('path'); // directory paths (built-in)
const flash = require('express-flash'); // flash without redirect
// database
const mongoose = require('mongoose'); // mongodb object modeling
const session = require('express-session'); // generate session data
const storeSession = require('connect-mongo')(session); // session data storage

var Room = require('./models/Room');
var User = require('./models/User');

// load API keys
dotenv.load({ path: '.env' });

// create new app w/ web server - Express
var app = express();
var server = http.createServer(app);
server.listen(3000, function() {
  console.log(chalk.yellow('listening on *:3000'));
});
// Express setup
app.use(express.static('public')); // point to location of static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // look for JSON in response body
app.use(flash());
app.use(errorHandler());
// app.set('views', path.join(__dirname, 'views'));

// create connection to database - MongoDB w/ Mongoose
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, {useMongoClient: true} );
var db = mongoose.connection;
db.on('error', function(err) {
  console.error(chalk.red.bold('Database connection error! Make sure MongoDB is running.'));
  process.exit();
});
db.once('open', function() {
  console.log(chalk.green.bold('Connected to MongoDB!'));
});
mongoose.Promise = global.Promise;

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
    // join a room based on user input
    socket.join(data.code);
    console.log(data.username + " joined Room " + data.room);
  });

  socket.on('chat', function(data){
    // sending data back to ALL sockets
    io.sockets.in(data.room).emit('chat', data);
  });
});

// STATIC ROUTES
// app.get('/', homeController.index);
// app.get('/room', roomController.index);
// app.post('/room', roomController.index);
