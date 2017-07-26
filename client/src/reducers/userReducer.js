export default function user(state='', action){
  switch(action.type){
    case 'NEW-USER':
      const newState = action.newUser;
      console.log(action.newUser);
      return newState;
    default:
      return state;
  }
}
