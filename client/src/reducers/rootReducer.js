import { combineReducers } from 'redux';
import users from './usersReducer';

const rootReducer = combineReducers({
  users: users,
});

export default rootReducer;
