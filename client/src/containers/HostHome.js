import React, { Component } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ChatWindow from './ChatWindow';

class HostHome extends Component {
  constructor(props) {
    super(props);
    this.generateRoomCode = this.generateRoomCode.bind(this);
    this.state = {
      code: this.generateRoomCode(),
      valid: false
    };
  }

  // makes random 4 letter/number code
  generateRoomCode() {
    var code = '';
    var chars = '0123456789ABCDEFGHIJKLMNOPQURSTUVWXYZ';
    for ( var i = 0; i < 4; i ++ ) {
      code += chars.substr(Math.floor(Math.random() * (chars.length - 1)), 1);
    }
    return code;
  }

  componentWillMount() {
    // autogenerate a room code
    console.log(this.state);
    // create room as a namespace for socket/io
  }

  render() {
    return (
      <section className="host-component">
        <h3>Room Code: </h3>
        <div>
          <VideoPlayer />
        </div>
          <ChatWindow />
        <div>
        </div>
      </section>
    )
  }
}

export default HostHome;
