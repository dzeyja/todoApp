import { useState } from "react"

const TodoForm = ({ addTask }) => {
    const [todoInput, setTodoInput] = useState('')

    function changeClick(e) {
        e.preventDefault()
        addTask(todoInput)
    }

    function changeHandler(e) {
        setTodoInput(e.target.value)
    }

    return (
        <form className="form">
            <input
                className="todoInp" 
                type="text" 
                onChange={changeHandler}
                value={todoInput}
                placeholder="Enter New Task"
            />
            <button 
                onClick={changeClick}
            >
                Add Task
            </button>
        </form>
    )
}

export default TodoForm