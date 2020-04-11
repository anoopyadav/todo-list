import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import Footer from './components/Footer/Footer';


class App extends Component {
    state = {
        items: []
    }

    render() {
        return (
            <div className="App">
                <Header />
                <ItemList />
                <Footer />
            </div>
        );
    }
}

export default App;
