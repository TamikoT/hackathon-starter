// action object returned from /actions is sent to all reducers through the rootReducer
// reducer can change the info for the particular piece of state

import initialState from '../reducers/initialState';
import { CREATE_ROOM, FIND_ROOM } from '../actions/roomActions';

export default function roomsReducer(state=initialState.rooms, action) {
  switch(action.type) {
    case CREATE_ROOM:
      // // console.log(action.payload);
      // // console.log(state);
      // if ([ ...state, action.payload.code ]) {
      // // console.log(state);
      // }
      return [ ...state, action.payload.code ];

    case FIND_ROOM:
        if ([ ...state, action.payload.code ]) {
          // console.log(state); // to test
        }
        return [ ...state, action.payload.code ]
    default:
      return state;
  }
}
