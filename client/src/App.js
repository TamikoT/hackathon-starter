import './App.css';
import React, { Component } from 'react';
// import components
import Header from './components/Header';
import Main from './components/Main';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    // make client-side connection with Express server
    // var socket = io.connect('http://localhost:3000');
    if (this.io === undefined) {
      this.io = io.connect('http://localhost:3001');

      this.io.on('data_change', (data) => {
        const actionType = `DATA_CHANGED_${data.type.toUpperCase()}`;
        this.context['store'].dispatch({ type: actionType });
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Main>
          {this.props.children}
        </Main>
      </div>
    );
  }
}

export default App;
