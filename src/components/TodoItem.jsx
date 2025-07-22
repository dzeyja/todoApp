import { useEffect, useState } from 'react'
import '../App.css'

const TodoItem = (props) => {
    const {
        task,
        deleteTask,
        toggleTask
    } = props

    
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('timerrr')
    }, 1000)
    
    return () => {
        clearInterval(timer)
        console.log('Таймер тоқтылды')
    }
  }, [])

    return (
       <div className={`todo ${task.completed ? 'completed' : ''}`}>
            <input 
                type='checkbox' 
                onChange={() => toggleTask(task.id)}
                checked={task.completed}
            />
            <span>
                {task.task}
            </span>
            <button onClick={() => deleteTask(task.id)}>
                Delete Task
            </button>
       </div> 
    )
}

export default TodoItem