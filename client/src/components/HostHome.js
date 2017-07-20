import React, { Component } from 'react';

class HostHome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="host-component">
        <ul>
          <h3>Create Room:</h3>
          <p>host creates a new room on click</p>
          <li><input id="hostUsername" type="text" placeholder="username" /></li>
          <li><button id ="start">Start</button></li>
        </ul>
      </section>
    )
  }
}

export default HostHome;
