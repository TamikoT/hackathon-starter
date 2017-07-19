const { expect } = require('chai');
const sinon = require('sinon');
const sinonMongoose = require('sinon-mongoose');

var Room = require('../models/Room');

describe('Room Model', () => {
  it('should create a new room', (done) => {
    const RoomMock = sinon.mock(new Room({ code: 'test', password: 'root' }));
    const room = RoomMock.object;

    RoomMock.expects('save').yields(null);

    room.save((err) => {
      RoomMock.verify();
      RoomMock.restore();
      expect(err).to.be.null;
      done();
    });
  });
});
