import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HostHome from './HostHome';
import User from './User';
import Home from './Home';
import About from './About';
import ChatWindow from './ChatWindow';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="home-component">
        <p className="console-log">inside main</p>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/host' component={HostHome} />
            <Route path='/user' component={User} />
            <Route path='/about' component={About} />
            <Route path='/demo' component={ChatWindow} />
          </Switch>
      </section>
    )
  }
}

export default Main;
