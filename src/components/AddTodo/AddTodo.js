import React, {useState} from 'react';
import './AddTodo.css';

const AddTodo = (props) => {
    const [todo, setTodo] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setTodo(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        props.addTodoHandler(todo);
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
            <button onClick={(event) => handleClick(event)}>+</button>
        </form>
    )
}

export default AddTodo;
