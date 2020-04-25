import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = (props) => {
    const items = []
    props.items.forEach((item, index) => {
        items.push(<Item key={index} value={item} />)
    })

    return (
        <div className='itemList'>
            {items}
        </div>
    );
}

export default ItemList;
