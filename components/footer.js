import React, { Component, PropTypes } from 'react'
export default class Footer extends Component {
  render(){
    return(
      <div>
        <div>Double click to edit a todo.</div>
        <div>created by cc.</div>
        <div>
          Part of <a href='http://www.todomvc.com'>todoMVC</a>
        </div>
      </div>
    )
  }
}
