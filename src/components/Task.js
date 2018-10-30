import React, { Component } from 'react'

class Task extends Component {
  render() {
    return (
      <div className='task'>
        <div>{this.props.name}</div>
        <div><input type="checkbox"></input></div>
        <div><button>Delete</button></div>
      </div>
    )
  }
}

export default Task;