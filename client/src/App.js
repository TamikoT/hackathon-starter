import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Muviato</h2>
        </div>
        <p className="App-intro">
          To get started, create or join a room.
        </p>
        <div>
          <button className="Button-newroom">
            <Link to='/'>Join a Room</Link>
          </button>
        </div>
        <div>
          <button className="Button-newroom">Create New Room</button>
        </div>
        <main>
        </main>
      </div>
    );
  }
}

export default App;
