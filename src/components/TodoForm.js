import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    //setting the state, the input is the value of the state and setInput will update the value of state. 
    //setting the value otherwise when you edit you won't see what you are changing. It shows what you already have in box and then you can update it
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    //allowing you to focus on whatever you put as the ref. The pointer is in there so you can know where to start typing 
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        //this generate a random number in the 1000 range. This make it unlikely that we would get the same Id out of the 8 choices
        props.onSubmit({
            //this shows the id
            id: Math.floor(Math.random() * 10000),
            //this shows the text from the input
            text: input
        });
        setInput('')
    };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Update your item "
                        value={input}
                        name="text"
                        className='todo-input edit'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button edit'>Update</button>
                </>
            ) :
                (
                    <>
                        <input
                            type="text"
                            placeholder="Add a todo"
                            value={input}
                            name="text"
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className='todo-button'>Add todo</button>
                    </>
                )
            }

        </form>
    )
}

export default TodoForm

