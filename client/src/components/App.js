import React, { Component } from 'react';
import io from 'socket.io-client';


// router component expects only one child wrapping every other component in App
class App extends Component {

  constructor(props) {
    super(props);
    // make client-side connection with Express server
    const socket = io('http://localhost:3001');
    console.log(socket);
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
