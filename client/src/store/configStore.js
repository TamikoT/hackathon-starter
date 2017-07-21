import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // returns a function instead of an action - used to delay an action
import RootReducer from '../reducers/rootReducer';

export default () => {
  return createStore (
    RootReducer,
    applyMiddleware(thunk)
  );
};
