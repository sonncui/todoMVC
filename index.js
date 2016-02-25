import React from 'react'
import {render} from 'react-dom'
import Todos from './components/todos'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { todos } from './reducer'

let store = createStore(todos,[{
  text: 'todo1',
  complete: false
},{
  text: 'todo2',
  complete: false
},{
  text: 'todo3',
  complete: true
}])

render(
  <Provider store={store}>
    <Todos />
  </Provider>,
   document.querySelector('#root')
 )
