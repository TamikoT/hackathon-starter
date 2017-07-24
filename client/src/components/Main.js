import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HostHome from './HostHome';
import Home from './Home';
import About from './About';
import ChatWindow from './ChatWindow';
import UserForm from './UserForm';
import VideoPlayer from './VideoPlayer';

class Main extends Component {
  render() {
    return (
      <section className="main-component">
          <Switch>
            <Route exact path='/' component={UserForm} />
            <Route path='/host' component={HostHome} />
            <Route path='/about' component={About} />
            <Route path='/demo' component={ChatWindow} />
            <Route path='/video' component={VideoPlayer} />
            <Route path='/chat' component={ChatWindow} />
            <Route path='/home' component={Home} />
          </Switch>
      </section>
    )
  }
}

export default Main;
