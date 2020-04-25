import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import Footer from './components/Footer/Footer';
import AddTodo from './components/AddTodo/AddTodo';


const App = () => {
    const [items, setItems] = useState([]);

    const addTodoHandler = (todo) => {
        setItems(prevItems => {
            return [
                ...prevItems,
                todo,
            ];
        });
    }

    return (
        <div className="App">
            <Header />
            <AddTodo addTodoHandler={addTodoHandler} />
            <ItemList items={items} />
            <Footer />
        </div>
    );
}

export default App;
