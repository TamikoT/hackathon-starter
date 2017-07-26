import React, { Component } from 'react';
import Header from './Header';

class About extends Component {
  render() {
    return (
      <section className="about-component">
        <Header />
        <h3>About</h3>
        <p>Here's stuff about this project.</p>
      </section>
    )
  }
}

export default About;
