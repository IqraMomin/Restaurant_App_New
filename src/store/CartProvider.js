import { useState } from "react";
import CartContext from "./cart-context" ;

const CartProvider = (props)=>{
    const [item,setItem] =useState([]);

    const addItemToCartHandler = ele=>{
        setItem([...item,ele]);
    }
    const removeItemFromCartHandler = (id)=>{
        const updatedItem = item.map(ele=>{
            if(ele.id === id){
                return {...ele,quantity:ele.quantity-1}
            }
            else{
                return ele;
            }
        })
        setItem(updatedItem);
    }
    const cartContext = {
        items:item,
        totalAmount:0,
        addItems:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
    return <CartContext value={cartContext}>
        {props.children}
    </CartContext>
}
export default CartProvider;