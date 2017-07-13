const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var User = require('./User');

const roomSchema = new Schema({
  code: { type: String, required: true, unique: true },
  // TODO: require later once hosts can be created
  _hostID: { type: String, ref: User, required: true },
}, {timestamps: true});

// TODO: add model helper methods here
// roomSchema.methods.functionName =

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
