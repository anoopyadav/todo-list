import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = () => {
    return (
        <div className='itemList'>
            <Item />
            <Item />
            <Item />
        </div>
    );
}

export default ItemList;
