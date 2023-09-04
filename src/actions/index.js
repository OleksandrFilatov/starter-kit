// actions.js
// Define your action types
export const SET_DATA = 'SET_DATA'

// Action creator functions
export const setData = data => {
  return {
    type: SET_DATA,
    payload: data
  }
}
