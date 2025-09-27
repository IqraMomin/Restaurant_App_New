import React from 'react';
import "./MealsItem.css";

function MealsItem(props) {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li className='list-items'>
            <div>
            <h3 className='name'>{props.name}</h3>
           <div className='description'>{props.description}</div>
           <div className='price'>{price}</div> 
            </div>
            <div>

            </div>
        </li>
    )
}

export default MealsItem
