import { combineReducers } from 'redux'
import {ADD_TODO, COMPLETE_TODO} from './action'

export function todos(state = [], action){
  switch (action.type) {
    case ADD_TODO:
      return [...state, {text: action.newText, complete: false}]
    case COMPLETE_TODO:
      return state.map((item, index) =>
        index === action.index ? {text: item.text, complete: !item.complete} : item
    )
    default:
      return state
  }
}
