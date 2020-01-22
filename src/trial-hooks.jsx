import React, {useState} from 'react'
import './App.css'

function Todo({todo, index, completeTodo, deleteTodo}){
    return (
        <div className="todo" style={{textDecoration:todo.isCompleted?"line-through":""}}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>complete</button>
                <button onClick={() => deleteTodo(index)}>delete</button>
            </div>
        </div>
    )
}

function TodoForm({addTodo}){
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setValue(value)
        if(!value) return
        addTodo(value) 
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}

function ReactHooks() {
    const [todos, setTodos] = useState([
        {
            text: "do some react tutorials",
            isCompleted: false
        },
        {
            text: "go to lunch with doods",
            isCompleted: false
        },
        {
            text: "work on todo list",
            isCompleted: false
        }
    ])

    const addTodo = (text) => {
        const newTodo = [...todos, {text}]
        setTodos(newTodo)
    }

    const completeTodo = (index) => {
        const newTodo = [...todos]
        newTodo[index].isCompleted = true
        setTodos(newTodo)
    }

    const deleteTodo = (index) => {
        const newTodo = [...todos]
        newTodo.splice(index, 1)
        setTodos(newTodo)
    }

    return (
        <div className="app">
            <div className="todo-list">
                {
                    todos.map((todo, index) => {
                        return <Todo
                            key={index}
                            index={index}
                            todo={todo}
                            completeTodo={completeTodo}
                            deleteTodo={deleteTodo}
                        />
                    })
                }
                <TodoForm
                    addTodo={addTodo}
                />
            </div>
        </div>
    )
}

export default ReactHooks
