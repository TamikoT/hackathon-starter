import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <section className="home-component">
        <p className="console-log">inside home</p>
        <h2>Welcome to Muviato!</h2>
        <div>
          <Link to='/user'><button>join a room</button></Link>
        </div>
        <div>
          <Link to='/host'><button>create a room</button></Link>
        </div>
      </section>
    )
  }
}

export default Home;
