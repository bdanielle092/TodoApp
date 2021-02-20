import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'



function Todo({ todos, completeTodo, removeTodo, updateTodo }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })


    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    //if edit id is true then we will return the todoForm 
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    //the second div is getting the id of the task that is being clicked on 
    return todos.map((todo, index) => (
        // this code it toggling if the task is complete or not
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>


            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon' />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon' />

            </div>

        </div>
    ))
}

export default Todo
