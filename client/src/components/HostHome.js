import React, { Component } from 'react';

class HostHome extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <section className="host-component">
        <h3>Your Room Code: </h3>
        <p>(please share with your people)</p>
        <h4>Video Player Settings</h4>
        <ul>
          <li>Setting 1:</li>
          <li>Setting 2:</li>
        </ul>
        <button>Open Video Player</button>
      </section>
    )
  }
}

export default HostHome;
