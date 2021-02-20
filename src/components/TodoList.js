import React, { useState } from 'react'
import TodoFrom from './TodoForm'
import Todo from './Todo'

function TodoList() {
    //setting state, todos is the value of state and setTodos is updating the value of state. pass in an empty array to useState
    const [todos, setTodos] = useState([])

    //this is the way if no one types in a letter it won't show up
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        //newTodos = an array  passing the todos and the spread(...)the other todos
        const newTodos = [todo, ...todos]
        //set the todos to the newTodos
        setTodos(newTodos)

    };

    //this is the function to delete a task
    //is checking to see the id in the array removing it from the app.
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    //this is the edit
    const updateTodo = (todoId, newValue) => {
        //we want the same logic that if you type in a space it won't update the todo
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        //we want this to check the id and if its changed to get the newValue otherwise get the old item
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                //toggling between true and false
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        //setting to updatedTodos
        setTodos(updatedTodos)
    }
    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoFrom onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />

        </div>
    )
}

export default TodoList
