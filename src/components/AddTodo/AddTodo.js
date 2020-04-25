import React, {useState} from 'react';
import './AddTodo.css';

const AddTodo = () => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        event.preventDefault();
        setTodo(event.target.value);
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
            <button onClick={handleSubmit}>+</button>
        </form>
    )
}

export default AddTodo;
