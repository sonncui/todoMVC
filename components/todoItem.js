import React, {Component, Proptypes} from 'react'
export default class TodoItem extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <input type="checkbox" checked={this.props.data.complete} onChange={() => this.props.toggle(this.props.index)}/>
        <span> {this.props.data.text} </span>
      </div>
    )
  }
}
