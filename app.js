// module dependencies
const EXPRESS = require('express'),
      HTTP = require('http'),
      SOCKET = require('socket.io');

// create new Express web server
var app = EXPRESS();
var server = HTTP.Server(app);
// set up socket by passing in HTTP server object
var io = SOCKET(server);

// express server listens on port :3000
server.listen(3000, function(){
  console.log('listening on *:3000');
});

// use built-in middleware function w/location of static files
app.use(EXPRESS.static('public'));

// on socket connection
io.on('connection', function(socket) {
  console.log('~socket made: connected to ' + socket.id);

  // triggered from client side with button
  socket.on('chat', function(data){
  // sending data back to ALL sockets
    io.sockets.emit('chat', data);
  });
});

// set up custom namespace on server-side
var nsp = io.of('/room');
nsp.on('connection', function(socket){
  console.log('someone connected to a room');
});
