import React, { useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import "./CartButton.css";

function CartButton(props) {

    return (
        <button className='button' onClick={props.onClick}>
            <span className='icon'><CartIcon/></span>
            <span >Your Cart</span>
            <span className='bagde'>3</span>
        </button>

    )
}

export default CartButton
