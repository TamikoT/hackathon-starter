// action object returned from /actions is sent to all reducers through the rootReducer
// reducer can change the info for the particular piece of state

import { CREATE_ROOM } from '../actions/roomActions';

export default function roomsReducer(state = [], action) {
  switch(action.type) {
  case CREATE_ROOM:
    // concat new room on top of the stack
    return [ action.payload.data, ...state ]
    console.log(state);
  default:
    return state;
  }
}
