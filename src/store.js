// store.js
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Define your initial state and reducer function
const initialState = []

const SET_DATA = 'SET_DATA'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

// Create the Redux store
const store = createStore(reducer)

export { store, Provider }
