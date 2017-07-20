import React, { Component } from 'react';
import * as SocketIOClient from 'socket.io-client';
import './App.css';

// import components
import NavBar from './components/NavBar';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props);
    // open socket on initialization
    if (this.io === undefined) {
      this.io = SocketIOClient.connect('http://localhost:3001');

      this.io.on('data_change', (data) => {
        const actionType = `DATA_CHANGED_${data.type.toUpperCase()}`;
        this.context['store'].dispatch({ type: actionType });
      });
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Main>
          {this.props.children}
        </Main>
      </div>
    );
  }
}

export default App;
