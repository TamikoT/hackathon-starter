import { combineReducers } from 'redux';
import users from './usersReducer';
import rooms from './roomsReducer';

const rootReducer = combineReducers({
  users: users,
  rooms: rooms
});

export default rootReducer;
