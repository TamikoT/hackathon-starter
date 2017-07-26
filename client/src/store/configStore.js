import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // returns a function instead of an action - used to delay an action
import RootReducer from '../reducers/rootReducer';
import initialState from '../reducers/initialState';

// getState() - returns state of current app
// dispatch(action) - triggers a state change
// subscribe(listener) - adds a state change listener

export default () => {
  return createStore (
    RootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};
