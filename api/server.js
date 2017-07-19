var app = require('./app');
var port = process.env.PORT || 3001;
const http = require('http'); // data transfer over HTTP (built-in)
const server = http.createServer(app);

server.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
