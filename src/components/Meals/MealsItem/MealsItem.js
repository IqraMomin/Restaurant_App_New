import React from 'react';
import "./MealsItem.css";
import MealsForm from './MealsForm';

function MealsItem(props) {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li key={props.id} className='list-items'>
            <div>
            <h3 className='name'>{props.name}</h3>
           <div className='description'>{props.description}</div>
           <div className='price'>{price}</div> 
            </div>
            <div>
                <MealsForm name={props.name} price={props.price} id={props.id}/>
            </div>
        </li>
    )
}

export default MealsItem
