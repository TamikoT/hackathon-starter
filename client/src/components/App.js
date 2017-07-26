import React, { Component } from 'react';
const io = require('socket.io-client');

// because router component expects only one child
// create App component that renders everything

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
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
