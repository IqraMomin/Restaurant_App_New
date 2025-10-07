import { useReducer } from "react";
import CartContext from "./cart-context" ;

const defaultCartCtx = {
    items:[],
    totalAmount:0
}

const reducer = (state,action)=>{
    if(action.type==='ADD'){
        //const updatedCartItem = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        const existingItemIndex = state.items.findIndex(item=> item.id===action.item.id);
        const existingItem = state.items[existingItemIndex];
        let updatedCartItem;
        if(existingItem){
            const updatedItem = {...existingItem,amount:existingItem.amount+action.item.amount}
            updatedCartItem = [...state.items];
            updatedCartItem[existingItemIndex] = updatedItem;
        }else{
            updatedCartItem = state.items.concat(action.item);
        }
        
        return{
            items:updatedCartItem,
            totalAmount:updatedTotalAmount
        }
    }
    return defaultCartCtx;
}

const CartProvider = (props)=>{
    const [item,dispatchItem] =useReducer(reducer,defaultCartCtx);

    const addItemToCartHandler = ele=>{
        dispatchItem({type:'ADD' ,item:ele});
    }
    const removeItemFromCartHandler = (id)=>{
        console.log("Removing Item");
    }
    const cartContext = {
        items:item.items,
        totalAmount:item.totalAmount,
        addItems:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
    return <CartContext value={cartContext}>
        {props.children}
    </CartContext>
}
export default CartProvider;