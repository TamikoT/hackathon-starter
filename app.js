// module dependencies
const EXPRESS = require('express'),
      HTTP = require('http'),
      SOCKETIO = require('socket.io');

// create new Express web server
var app = EXPRESS();
var server = HTTP.createServer(app);
// set up socket by passing in HTTP server object
var io = SOCKETIO(server);

// express server listens on port :3000
server.listen(3000, function() {
  console.log('listening on *:3000');
});

// use built-in middleware function w/location of static files
app.use(EXPRESS.static('public'));

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
