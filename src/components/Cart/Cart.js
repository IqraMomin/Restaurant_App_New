import React, { useContext } from 'react'
import "./Cart.css";
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItems from './CartItems';

function Cart(props) {
    const cartCtx = useContext(CartContext);
    const itemsInCart = cartCtx.items.length>0;
    const totalAmount =`$${cartCtx.totalAmount.toFixed(2)}`;

    const removeItemHandler=(id)=>{
        cartCtx.removeItem(id);
    }

    const addItemsHandler=(item)=>{
        cartCtx.addItems({...item,amount:1});
    }
    const cartItems=<ul className='cart-items'>
        {cartCtx.items.map(item=>{
            return <CartItems 
            key={item.id} 
            id={item.id}
            price={item.price} 
            name={item.name} 
            amount={item.amount} 
            onRemove={removeItemHandler.bind(null,item.id)}
            onAdd={addItemsHandler.bind(null,item)}/>
        })}
        </ul>

    return (
        <Modal onClose={props.onCloseCart}>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onCloseCart}>Close</button>
                {itemsInCart && <button className='button'>Order</button>}
            </div>

        </Modal>
    )
}

export default Cart
