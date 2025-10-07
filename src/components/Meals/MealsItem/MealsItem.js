import React,{useContext} from 'react';
import "./MealsItem.css";
import MealsForm from './MealsForm';
import CartContext from '../../../store/cart-context';

function MealsItem(props) {
    const price = `$${props.price.toFixed(2)}`;

    const itemCtx = useContext(CartContext);
    const addToCart = (amount)=>{
        itemCtx.addItems({
            id:props.id,
            name:props.name,
            price:props.price,
            amount:amount
        })
    }

    return (
        <li key={props.id} className='list-items'>
            <div>
            <h3 className='name'>{props.name}</h3>
           <div className='description'>{props.description}</div>
           <div className='price'>{price}</div> 
            </div>
            <div>
                <MealsForm onAdd={addToCart} name={props.name} price={props.price} id={props.id}/>
            </div>
        </li>
    )
}

export default MealsItem
