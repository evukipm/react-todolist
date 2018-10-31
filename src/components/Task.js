import React, { Component } from 'react'

class Task extends Component {

  handleDelete = () => {
    const {onDelete, index} = this.props
    onDelete(index)
  }

  render() {
    const {name} = this.props

    return (
      <div className='task'>
        <div>{name}</div>
        <div><input type="checkbox"></input></div>
        <div><button onClick={this.handleDelete}>Delete</button></div>
      </div>
    )
  }
}

export default Task;