import React, { Component } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ChatWindow from './ChatWindow';
import { connect } from 'react-redux';

class HostWindow extends Component {
  constructor(props) {
    super(props);
    let roomCode = props.currentUser.code;
    this.state = {
      code: props.currentUser.code,
      hasRoom: false
    };
  }

  componentDidMount() {
    this.setState({ hasRoom: true });
    // console.log(this.state);
  }

  render() {
    return (
      <section className='host-component'>
        <div>
          <h3>
            {this.state.hasRoom ? `code to join: ${this.state.code}` : `not found` }
          </h3>
        </div>
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
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(HostWindow);
