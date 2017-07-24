import React, { Component } from 'react';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    console.log("hello!");
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
