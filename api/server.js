var app = require('./app');
var port = process.env.PORT || 3001;
const http = require('http'); // data transfer over HTTP (built-in)
const server = http.createServer(app);
const socketIo = require('socket.io'); // create websockets
const chalk = require('chalk');

// set up websocket on backend with socket.io
var io = socketIo(server);

// callback for the first time socket is made
io.on('connection', function(socket) {
  console.log(chalk.bgBlue('-> socket opened: ' + socket.id));

  // ENTER a room
  socket.on('enterRoom', function(data){
    // { code: "", username: "" }
    socket.join(data.code);
    var joinMessage = `${data.username} joined!`
    console.log(joinMessage);
    // io.sockets.in(data.code).emit('msgShared', joinMessage);
    // TODO: rething data strucure (hash) or make different callback
  });

  socket.on('msgSent', function(data){
    // sending data back to ALL sockets
    io.sockets.in(data.room).emit('chat', data);
  });
});


server.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
