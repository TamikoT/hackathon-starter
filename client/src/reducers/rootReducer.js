import { combineReducers } from 'redux';
import userReducer from './userReducer';
import roomsReducer from './roomsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  currentUser: userReducer,
  rooms: roomsReducer,
  
  // set reducer for form from redux-form lib with alias
  form: formReducer
});

export default rootReducer;
