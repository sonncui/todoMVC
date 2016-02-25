import React, { Component, PropTypes } from 'react';
import TodoItem from './todoItem';

export default class TodoList extends Component {

  render() {
    let datas = this.props.items
    return (
      <div>
        <ul>
          {datas.map((data, index) => <TodoItem index={index} key={index} data={data} toggle={(index) => this.props.handleToggle(index)}/>)}
        </ul>
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
