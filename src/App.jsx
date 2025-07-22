import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  // Задачаны қосытын функция
  const addTask = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Date.now(),
        task: userInput,
        completed: false
      }

      setTodos([...todos, newTask])
    }
  }
  
  // Задачаны өшіретін функция
  const deleteTask = (id) => {
    setTodos([...todos.filter(task => task.id !== id)])
  }

  // Задачаны өзгертетін функция
  const toggleTask = (id) => {
    const changedTodos = todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
    setTodos(changedTodos)
  }

  return (
    <div className='todos'>
      <h1>Todo App</h1>
      <TodoForm addTask={addTask} />
      <div>
        {
          todos.length > 0 ? 
          (
            todos.map(task => (
              <TodoItem 
                  key={task.id}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask} 
                  task={task} 
                />
            ))
          ) : (
            <h3 style={{color: 'red'}}>Сенде тапсырмалар пока жоқ!</h3>
          )
        }
      </div>
    </div>
  )
}

export default App
