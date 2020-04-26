import React, {useState} from 'react';
import './AddTodo.css';

const AddTodo = (props) => {
    const [todo, setTodo] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        const {value} = event.target;
        setTodo(value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        props.addTodoHandler(todo.trim());
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
                disabled={todo.trim() === "" ? true : false}
                onClick={(event) => handleClick(event)}>+</button>
        </form>
    )
}

export default AddTodo;
