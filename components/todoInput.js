import React, { Component, PropTypes } from 'react';

export default class TodoInput extends Component {
  addTodo() {
    this.props.addTodo(this.refs.newText.value)
    this.refs.newText.value=''
  }
  render(){
    return(
      <div>
        <input type='text' placeholder='What needs to be done?' ref='newText' />
        <button onClick={() => this.addTodo()}>add</button>
      </div>
    )
  }
}
