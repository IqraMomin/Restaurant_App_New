import React from 'react';
import "./MealsItem.css";

function MealsItem(props) {
    return (
        <li className='list-items'>
            <h3 className='name'>{props.name}</h3>
            <p className='description'>{props.description}</p>
            <h3 className='price'>${props.price}</h3>
        </li>
    )
}

export default MealsItem
