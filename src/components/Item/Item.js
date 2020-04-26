import React from 'react';
import './Item.css';

const Item = (props) => {
    return (
        <div className='item'>
            <div className="item-text">{props.value}</div>
            <div className="button-container">
                <button
                    className='remove-button'
                    onClick={() => props.removeTodoHandler(props.itemKey)}
                >x</button>
            </div>
        </div>
    )
}

export default Item;
