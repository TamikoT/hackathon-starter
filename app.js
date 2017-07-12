// DEPENDENCIES
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
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

// load API keys
dotenv.load({ path: '.env' });

// create new app w/ web server - Express
var app = express();
var server = http.createServer(app);
server.listen(3000, function() {
  console.log('listening on *:3000');
});
// Express setup
app.use(express.static('public')); // point to location of static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // look for JSON in response body

// create connection to database - MongoDB w/ Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, {useMongoClient: true} );
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('Database connection error! Make sure MongoDB is running.');
  process.exit();
});

// set up websocket our web server - socket.io
var io = socketIo(server);
// on socket connection
io.on('connection', function(socket) {
  console.log('~socket made: connected to ' + socket.id);
  // emitted from client side
  socket.on('chat', function(data){
    // join a room based on user input
    socket.join(data.room);
    console.log("joined room: " + data.room);
    // sending data back to ALL sockets
    io.sockets.in(data.room).emit('chat', data);
  });
});

// CONTROLLERS

// ROUTES
