import React from 'react';
import './Item.css';

const Item = (props) => {
    return (
        <div className='item'>
            {props.value}
        </div>
    )
}

export default Item;
