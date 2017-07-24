import React, { Component } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ChatWindow from './ChatWindow';

class HostHome extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    // autogenerate a room code
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
