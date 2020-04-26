import React, {useState, useRef} from 'react';
import './AddTodo.css';

const AddTodo = (props) => {
    const [todo, setTodo] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        const {value} = event.target;
        setTodo(value.trim());
    }

    const handleClick = (event) => {
        event.preventDefault();
        props.addTodoHandler(todo);
        setTodo("");
    }

    return (
        <form id='add-form'>
            <input
                type='text'
                name='todo'
                placeholder="Add new Todo"
                value={todo}
                onChange={handleChange}
            >
            </input>
            <button
                className='add-button'
                type='button'
                disabled={todo === "" ? true : false}
                onClick={(event) => handleClick(event)}>+</button>
        </form>
    )
}

export default AddTodo;
