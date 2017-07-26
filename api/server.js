var app = require('./app');
var port = process.env.PORT || 3001;
const http = require('http'); // data transfer over HTTP (built-in)
const server = http.createServer(app);
const socketIo = require('socket.io'); // create websockets
const chalk = require('chalk');

// WEBSOCKET SETUP | SOCKET.IO
// set up websocket our web server - socket.io
var io = socketIo(server);

server.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
