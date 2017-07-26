// info: action creators are functions that return an action object
import axios from 'axios';
const API_ROOMS_URL = 'http://localhost:3001/api/rooms';

// convention to reduce chance of typo bugs
export const CREATE_ROOM = 'CREATE_ROOM';
export const FIND_ROOM = 'FIND_ROOM';
export const FETCH_ROOMS = 'FETCH_ROOMS';
export const JOIN_ROOM = 'JOIN_ROOM';

export function createRoom(code) {
  return(dispatch) => {
    var codeData = { code };
    axios.post(API_ROOMS_URL, codeData)
      .then( (res) => {
        // console.log(res);
          dispatch(createRoomSuccess(codeData));
      })
      .catch(function (err) {
        // console.log(err);
        alert(err);
      });
  };
}
export function createRoomSuccess(payload){
  alert("New room created!");
  return { type: CREATE_ROOM, payload };
}

export function fetchRooms(code) {
  return (dispatch) => {
    axios.get(API_ROOMS_URL)
      .then( (res) => {
        // console.log(res);
        dispatch(fetchRoomsSuccess());
      })
      .catch(function (err) {
        // console.log(err);
        alert(err);
      });
  }
}
export function fetchRoomsSuccess(payload){
  // console.log("// called findRoomSuccess");
  // console.log(payload);
  return { type: FETCH_ROOMS, payload };
}


export function findRoom(code) {
  return (dispatch) => {
    axios.get(`${API_ROOMS_URL}/${code}`)
      .then( (res) => {
        console.log(res);
        dispatch(findRoomSuccess());
      })
      .catch(function (err) {
        console.log(err);
        alert('Your room could not be found!');
        dispatch(findRoomFail());
      });
  }
}
export function findRoomSuccess(payload){
  // console.log("// called findRoomSuccess");
  // console.log(payload);
  return { type: FIND_ROOM, payload };
}
export function findRoomFail(payload){
  console.log(payload);
  return { type: FIND_ROOM, payload };
}

export function joinRoom(code) {
  return (dispatch) => {
    axios.get(`${API_ROOMS_URL}/${code}`)
      .then( (res) => {
        // console.log(res);
          dispatch(findRoomSuccess());
      })
      .catch(function (err) {
        // console.log(err);
        alert(err);
      });
  }
}
export function joinRoomSuccess(payload){
  // console.log("// called joinRoomSuccess");
  // console.log(payload);
  return { type: JOIN_ROOM, payload };
}
