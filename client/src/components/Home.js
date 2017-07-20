import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <section className="home-component">
        <p className="console-log">inside home</p>
        <h2>Welcome to Muviato!</h2>
        <ul>
          <li>
            <label>your sweet username: </label>
            <input id="hostUsername" type="text" placeholder="make a username" />
          </li>
          <li>
            <label>the secret code, please: </label>
            <input id="roomCode" type="text" placeholder="room code" />
            <Link to='/user'><button>Enter</button></Link>
          </li>
        </ul>
        <div>
          <Link to='/host'>create a new room</Link>
        </div>
      </section>
    )
  }
}

export default Home;
