import React, { Component } from 'react';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    console.log("made ChatWindow");
  }
  render() {
    return (
      <section className="chat-window-component">
        <p className="console-log">inside chatwindow</p>
      </section>
    )
  }
}

export default ChatWindow;
