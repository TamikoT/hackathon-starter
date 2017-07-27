import { ADD_MESSAGE } from '../actions/userActions';

export default function messagesReducer(state=[], action){
  switch(action.type){
    case ADD_MESSAGE:
      const newMessage = action.payload;
      console.log(action.payload);
      return [ ...state, newMessage]
    default:
      return state;
  }
}
