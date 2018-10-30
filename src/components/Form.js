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
    event.preventDefault();
    this.props.update(this.state.value);
    this.setState({value: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Task:</label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;