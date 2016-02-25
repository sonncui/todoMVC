export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export function addTodo(newText){
  return {
    type: ADD_TODO,
    newText
  }
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index
  }
}
