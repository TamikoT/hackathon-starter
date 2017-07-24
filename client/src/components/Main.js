import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HostHome from '../containers/HostHome';
import ChatWindow from '../containers/ChatWindow';
import About from './About';
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
            <Route path='/video' component={VideoPlayer} />
            <Route path='/chat' component={ChatWindow} />
          </Switch>
      </section>
    )
  }
}

export default Main;
