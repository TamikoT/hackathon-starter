const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  code: { type: 'String', required: true, unique: true },
  hostId: 'String', // TODO: require later once hosts can be created
  name: 'String',
}, {timestamps: true});

// TODO: add model helper methods here
// roomSchema.methods.functionName =

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
