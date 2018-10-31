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
    this.setState({tasks})
  }

  deleteTask = index => {
    tasks.splice(index, 1);
    this.setState({tasks})
  }

  render() {
    return (
      <div className='task-list'>
        {tasks.map((task, index) => {
            return <Task 
              key={index}
              index={index}
              name={task.name}
              onDelete={this.deleteTask}
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