import React, { Component } from 'react'
import tasks from './tasks'

class Form extends Component {

  state = {
    value: '',
    taskArr: tasks
  }


  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = event => {
    const {value} = this.state
    const {update} = this.props

    event.preventDefault();
    update(value);
    this.setState({value: ''})
  }

  render() {
    const {value} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Task:</label>
        <input type="text" value={value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;