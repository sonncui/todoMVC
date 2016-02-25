import React, { Component, PropTypes } from 'react';
import TodoList from './todoList';
import TodoInput from './todoInput'
import { connect } from 'react-redux'
import { addTodo, completeTodo } from '../action'

class TodoContainer extends Component {

  render() {
    const {dispatch, datas} = this.props
    return (
      <div>
        <TodoInput addTodo={(newText) => dispatch(addTodo(newText))}/>
        <TodoList items={datas} handleToggle={(index) => dispatch(completeTodo(index))}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
      datas: state
  }
}

export default connect(mapStateToProps)(TodoContainer)

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     text: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired
//   }).isRequired).isRequired
// }
