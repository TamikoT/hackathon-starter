import initialState from '../reducers/initialState';
import { NEW_USER } from '../actions/userActions';

export default function userReducer(state=initialState.currentUser, action){
  switch(action.type){
    case NEW_USER:
      const newUser = action.currentUser;
      console.log(action.currentUser);
      return newUser;
    default:
      return state;
  }
}

// return Object.assign({}, state.activeRoom, {
//         title: (action.payload.room || action.payload[0].room),
//         messages: action.payload
//       })
