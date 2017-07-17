import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Host from './Host';
import User from './User';
import Home from './Home';
import About from './About';

class Main extends Component {
  render() {
    return (
      <section className="home-component">
        <p className="console-log">inside main</p>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/host' component={Host} />
            <Route path='/user' component={User} />
            <Route path='/about' component={About} />
          </Switch>
      </section>
    )
  }
}

export default Main;
