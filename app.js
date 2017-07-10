// dependencies
var express = require('express');
var socket = require('socket.io');

// set up app on port :3000
var app = express();
var server = app.listen(3000, function(){
  console.log('listening to local requests on :3000');
});

// location of static files
app.use(express.static('public'));

// set up socket server
var io = socket(server);

io.on('connection', function(socket) {
  console.log('~socket made: connected to ' + socket.id);

  // triggered from client side with button
  socket.on('chat', function(data){
  // sending data back to ALL sockets
    io.sockets.emit('chat', data);
  });

});
