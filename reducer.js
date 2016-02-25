import { combineReducers } from 'redux'
import {ADD_TODO, COMPLETE_TODO} from './action'

export function todos(state = [], action){
  switch (action.type) {
    case ADD_TODO:
      return [...state, {text: action.newText, complete: false}]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          text: state[action.index].text,
          complete: !state[action.index].complete
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}
