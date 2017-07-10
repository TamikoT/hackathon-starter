// make client-side connection with Express server
var socket = io.connect('http://localhost:3000');

// raw DOM objects as variables
var message = document.getElementById('message'),
    handle = document.getElementById('username'),
    sendButton = document.getElementById('send'),
    messages = document.getElementById('messages');

// event triggered w/ button click - emit to Express server
sendButton.addEventListener('click', function(){
  console.log(message.value);
  socket.emit('chat', {
    'message': message.value,
    'username': username.value
  });
  // reset message content
  message.value = "";
});

// event handler to add messages to DOM
socket.on('chat', function(data){
  messages.innerHTML += '<li>' + data.username + ': ' + data.message + '</li>';
});
