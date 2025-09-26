import React from 'react'
import CartIcon from '../Cart/CartIcon'
import "./CartButton.css";

function CartButton() {
    return (
        <button className='button'>
            <span className='icon'><CartIcon/></span>
            <span >Your Cart</span>
            <span className='bagde'>3</span>
        </button>
    )
}

export default CartButton
