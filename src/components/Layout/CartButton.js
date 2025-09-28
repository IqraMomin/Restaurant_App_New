import React, { useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import "./CartButton.css";
import Cart from '../Cart/Cart';

function CartButton(props) {

    const [openCart,setOpenCart] = useState(false);

    const openCartHandler = ()=>{
        setOpenCart(true);
    }

    const closeCartHandler = ()=>{
        setOpenCart(false);
    }
    return (
        <React.Fragment>
        <button className='button' onClick={openCartHandler}>
            <span className='icon'><CartIcon/></span>
            <span >Your Cart</span>
            <span className='bagde'>3</span>
        </button>
        {openCart && <Cart onCloseCart={closeCartHandler}/>}
        </React.Fragment>
    )
}

export default CartButton
