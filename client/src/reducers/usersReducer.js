import initialState from './initialState'

export default function usersReducer(state=initialState.users, action){
  switch(action.type){
    case 'NEW-USER':
      var newState = action.user;
      return newState;
    default:
      return state;
  }
}
