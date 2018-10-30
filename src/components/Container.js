import React, { Component } from 'react';
import tasks from './tasks'
import Task from './Task'
import Form from './Form'

class Container extends Component {

  state = {
    tasks: tasks
  }

  updateTasks = value => {
    tasks.push({name: value})
    this.setState({tasks: tasks})
  }

  render() {
    return (
      <div className='task-list'>
        {tasks.map((task, ix) => {
            return <Task 
              key={ix}
              name={task.name}
            />
          })
        }
        <Form 
          update={this.updateTasks}
        />
      </div>
    )
  }
}

export default Container