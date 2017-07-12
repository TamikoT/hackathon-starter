import mongoose from 'mongoose';

const roomSchema = new mongoose.schema({
  code: { type: 'String', required: true, unique: true },
  hostId: { type: 'String' }, // TODO: require later once hosts can be created
  name: { type: 'String' },
}, {timestamps: true});

// TODO: add model helper methods here
// roomSchema.methods.functionName =

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
