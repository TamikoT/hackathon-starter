const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  isHost: { type: Boolean, required: true, default: false },
  voteCount: { type: Number, required: true, default: 0 },
  // _roomID: { type: String, ref: Room },
}, {timestamps: true});

// TODO: add model helper methods here
// userSchema.methods.functionName =
// user in same room must have a unique name

const User = mongoose.model('User', userSchema);

module.exports = User;
