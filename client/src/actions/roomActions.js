// NOTE: action creators are functions that return an action object

import axios from 'axios';

const API_ROOMS_URL = 'http://localhost:3001/api/rooms'
// convention to reduce chance of typo bugs
export const CREATE_ROOM = 'CREATE_ROOM';

export function createRoom(code) {
  return(dispatch) => {
    var codeData = { code };
    console.log(codeData);
    axios.post(API_ROOMS_URL, codeData)
      .then( (res) => {
        console.log(res);
          dispatch(createRoomSuccess(codeData));
      })
      .catch(function (err) {
        console.log(err);
        alert(err);
      });
  }
};

export function createRoomSuccess(payload){
  return { type: CREATE_ROOM, payload };
}
