import React, { Component } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ChatWindow from './ChatWindow';

class HostHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  componentWillMount() {
    // autogenerate a room code
    console.log(this.state);
    // create room as a namespace for socket/io
  }

  render() {
    return (
      <section className='host-component'>
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

function mapStateToProps(state, ownProps) {
  // react-router changed props and nested params in props.match
  return { code: state.code }
}

export default connect(mapStateToProps)(HostWindow);