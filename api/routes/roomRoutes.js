var router = require('express').Router();
var rooms = require('../controllers/rooms');

var roomRoutes =  {
  // todoList Routes
  router.get('/rooms', rooms.list_all_rooms());

  //   .post(rooms.create_a_room);
  //
  // router.use('/rooms/:roomId')
  //   .get(rooms.read_a_room)
  //   .put(rooms.update_a_room)
  //   .delete(rooms.delete_a_room);
};

module.exports = roomRoutes;
