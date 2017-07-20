import React, { Component } from 'react'

class User extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <section className="user-component">
        <p className="console-log">inside user</p>
        <ul>
          <h3>Join Room:</h3>
          <p>Enter before chat:</p>
          <li><input id="username" type="text" placeholder="username" /></li>
          <li><input id="roomCode" type="text" placeholder="enter room code" /></li>
          <li><button id ="enter">Enter</button></li>
        </ul>
      </section>
    )
  }
}

export default User;
