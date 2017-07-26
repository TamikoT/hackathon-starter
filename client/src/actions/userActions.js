export function newUser(user){
  console.log(user);
  return { type: 'NEW_USER', user }
}
