// convention to reduce chance of typo bugs
export const ADD_MESSAGE = 'ADD_MESSAGE';

export function addMessage(payload) {
  return { type: ADD_MESSAGE, payload };
};
