export default function user(state='', action){
  switch(action.type){
    case 'NEW-USER':
      const newState = action.user;
      return newState;
    default:
      return state;
  }
}
