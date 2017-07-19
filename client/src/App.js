import React, { Component } from 'react';
import './App.css';
// import components
import NavBar from './components/NavBar';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
