var app = require('./app');
var port = process.env.PORT || 3001;
const http = require('http'); // data transfer over HTTP (built-in)
const server = http.createServer(app);
const socketIo = require('socket.io'); // create websockets
const chalk = require('chalk');

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
      console.log('New room ' + newUser.username + ' created!');
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
});

server.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
