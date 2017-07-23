import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HostHome from './HostHome';
import Home from './Home';
import About from './About';
import ChatWindow from './ChatWindow';
import userForm from './userForm';
import VideoPlayer from './VideoPlayer';

class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <section className="main-component">
        <p className="console-log">inside main</p>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/host' component={HostHome} />
            <Route path='/about' component={About} />
            <Route path='/demo' component={ChatWindow} />
            <Route path='/video' component={VideoPlayer} />
            <Route path='/chat' component={ChatWindow} />
            <Route path='/form' component={userForm} />
          </Switch>
      </section>
    )
  }
}

export default Main;
