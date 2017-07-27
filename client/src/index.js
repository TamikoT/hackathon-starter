import 'babel-polyfill';
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
import PresenterView from './containers/PresenterView';
import ChatSubmit from './containers/ChatSubmit';
import About from './components/About';
import Welcome from './containers/Welcome';
import HostLogin from './containers/HostLogin';

const store = ConfigAppStore();

store.subscribe(() => {
  // console.log(store.getState());
});

render(
  <Provider store={store}>
    <Router>
      <App>
        <section className="routes">
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/about' component={About} />
            <Route path='/room' component={PresenterView} />
            <Route path='/login' component={HostLogin} />
            <Route path='/chat' component={ChatSubmit} />
          </Switch>
        </section>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
