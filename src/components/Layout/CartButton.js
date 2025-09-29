import React, { useContext} from 'react'
import CartIcon from '../Cart/CartIcon'
import "./CartButton.css";
import CartContext from '../../store/cart-context';

function CartButton(props) {

    const cartCtx = useContext(CartContext);

    const totalItems = cartCtx.items.reduce((curNum,item)=>{
        return curNum + item.quantity;
    },0)

    return (
        <button className='button' onClick={props.onClick}>
            <span className='icon'><CartIcon/></span>
            <span >Your Cart</span>
            <span className='bagde'>{totalItems}</span>
        </button>

    )
}

export default CartButton
