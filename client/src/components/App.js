import React, { Component } from 'react';

// router component expects only one child wrapping every other component in App
class App extends Component {
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
