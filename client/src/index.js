import 'babel-polyfill' ;
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Redux Provider used to make store available to all components
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import ConfigAppStore from './store/configStore';
import registerServiceWorker from './registerServiceWorker';
// components and containers
import HostHome from './containers/HostHome';
import ChatWindow from './containers/ChatWindow';
import About from './components/About';
import Welcome from './containers/Welcome';
import VideoPlayer from './components/VideoPlayer';

const store = ConfigAppStore();

render(
  <Provider store={store}>
    <Router>
      <App>
        <section className="routes">
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/host' component={HostHome} />
            <Route path='/about' component={About} />
            <Route path='/video' component={VideoPlayer} />
            <Route path='/chat' component={ChatWindow} />
          </Switch>
        </section>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
