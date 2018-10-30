import React, { Component } from 'react'

class Task extends Component {

  handleDelete = () => {
    this.props.onDelete(this.props.index)
  }

  render() {
    return (
      <div className='task'>
        <div>{this.props.name}</div>
        <div><input type="checkbox"></input></div>
        <div><button onClick={this.handleDelete}>Delete</button></div>
      </div>
    )
  }
}

export default Task;