import React, {Component, PropTypes } from 'react';
import TodoContainer from './todoContainer';
import TodoTitle from './todoTitle';
import TodoInput from './todoInput'
import Footer from './footer'
// import {store}

export default class Todos extends Component {
  render(){
    return(
      <div>
        <TodoTitle />
        <TodoContainer />
        <Footer />
      </div>
    )
  }
}
