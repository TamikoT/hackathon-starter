// make client-side connection with Express server
var socket = io.connect('http://localhost:3000');

// raw DOM objects as variables
var message = document.getElementById('message'),
    handle = document.getElementById('username'),
    sendButton = document.getElementById('send'),
    messages = document.getElementById('messages'),
    enterButton = document.getElementById('enter');
    roomIn = document.getElementById('room');
    roomCode = document.getElementById('roomCode'); // user input
    startButton = document.getElementById('start');

// event triggered w/ `start` click - emit to Express server
startButton.addEventListener('click', function() {
  console.log('start button clicked by user');
  socket.emit('start');
});

socket.on('start', function(data) {
  alert("your room code is" + data.code);
});

// event triggered w/ `enter` click - emit to Express server
enterButton.addEventListener('click', function() {
  console.log();
  socket.emit('enter', {
    'code': roomCode.value,
  });
});

socket.on('enter', function(data) {
  alert("you entered" + data.room);
});

// event triggered w/ `send` click - emit to Express server
sendButton.addEventListener('click', function() {
  console.log(message.value);
  socket.emit('chat', {
    'room': roomIn.innerHTML,
    'message': message.value,
    'username': username.value
  });

  // reset message content
  message.value = "";
});

// event handler to add messages to DOM
socket.on('chat', function(data) {
  messages.innerHTML += '<li>' + data.username + ': ' + data.message + '</li>';
});
