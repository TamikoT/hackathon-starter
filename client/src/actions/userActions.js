export const NEW_USER = 'NEW_USER'

const API_USERS_URL = 'http://localhost:3001/api/users';

export const NEW_USER = 'NEW_USER';

export function newUser(username){
  console.log(`called newUser() w/username: (${username})`);
  return(dispatch) => {
    var userData = { username };
    axios.post(API_USERS_URL, userData)
      .then( (res) => {
        console.log(res);
        dispatch(newUserSuccess(codeData));
      })
      .catch(function (err) {
        console.log(err);
        alert(err);
      });
  };
}

export function newUserSuccess(payload) {
  alert('New user created!');
  console.log(`called newUserSuccess() w/payload: ${payload}`);
  return { type: NEW_USER, payload };
}
