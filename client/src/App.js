import './App.css';
import React, { Component } from 'react';
// import components
import Header from './components/Header';
import Main from './components/Main';
const io = require('socket.io-client');


class App extends Component {
  constructor(props) {
    super(props);
    // make client-side connection with Express server
    if (this.io === undefined) {
      this.io = io('http://localhost:3001');
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Main />
      </div>
    )
  }
}

export default App;
