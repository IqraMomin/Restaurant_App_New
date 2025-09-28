import React from 'react'
import "./Cart.css";
import Modal from '../UI/Modal';

function Cart(props) {
    const cartItems=<ul className='cart-items'>
        {[{id:'1',name:'Sushi',amount:'2',price:'12.99'}].map(item=>{
            return <li>{item.name}</li>
        })}
        </ul>

    return (
        <Modal>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className='actions'>
                <button className='button--alt'>Close</button>
                <button className='button'>Order</button>
            </div>

        </Modal>
    )
}

export default Cart
