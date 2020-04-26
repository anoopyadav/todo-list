import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = (props) => {
    const items = []
    props.items.forEach((item, index) => {
        items.push(
            <Item
                key={index}
                itemKey={index}
                value={item}
                removeTodoHandler={props.removeTodoHandler}
            />
        );
    })

    return (
        <div className='itemList'>
            {items}
        </div>
    );
}

export default ItemList;
