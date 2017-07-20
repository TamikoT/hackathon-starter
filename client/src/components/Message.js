import React, { Component } from 'react'

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="message-component">
        <p className="console-log">inside message</p>
        <h2>Message</h2>
      </section>
    )
  }
}

export default Message;
