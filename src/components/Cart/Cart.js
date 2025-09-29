import React, { useContext } from 'react'
import "./Cart.css";
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItems from './CartItems';

function Cart(props) {
    const cartCtx = useContext(CartContext);

    const removeItemHandler=(id)=>{
        cartCtx.removeItem(id);
    }

    const addItemsHandler=(item)=>{
        cartCtx.addItems(item)
    }
    const cartItems=<ul className='cart-items'>
        {cartCtx.items.map(item=>{
            return <CartItems 
            key={item.id} 
            id={item.id}
            price={item.price} 
            name={item.name} 
            quantity={item.quantity} 
            onRemove={removeItemHandler}
            onAdd={addItemsHandler}/>
        })}
        </ul>

    return (
        <Modal onClose={props.onCloseCart}>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onCloseCart}>Close</button>
                <button className='button'>Order</button>
            </div>

        </Modal>
    )
}

export default Cart
