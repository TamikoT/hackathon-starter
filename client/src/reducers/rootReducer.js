import { combineReducers } from 'redux';
import users from './usersReducer';
import rooms from './roomsReducer';
// set reducer for form from redux-form lib with alias
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  users: users,
  rooms: rooms,
  form: formReducer
});

export default rootReducer;
