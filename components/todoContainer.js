import React, { Component, PropTypes } from 'react';
import TodoList from './todoList';
import TodoInput from './todoInput'
// import {connect} from ''
export default class TodoContainer extends Component {
  getData(){
      return [{
        text: 'todo1',
        complete: false
      },{
        text: 'todo2',
        complete: false
      },{
        text: 'todo3',
        complete: true
      }]
  }

  componentWillMount() {
    this.setState({data: this.getData()})
  }

  handleToggle(index){
    var newState = Object.assign({}, this.state)
    newState.data[index].complete = !newState.data[index].complete
   this.setState(newState)
  }

  addTodo(newText){
    this.setState({data: [...this.state.data, {text: newText, complete: false}]})
  }

  render() {
    return (
      <div>
        <TodoInput addTodo={(newText) => this.addTodo(newText)}/>
        <TodoList items={this.state.data} handleToggle={(index) => this.handleToggle(index)}/>
      </div>
    )
  }
}

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     text: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired
//   }).isRequired).isRequired
// }
