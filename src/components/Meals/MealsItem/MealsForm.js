import React, { useContext } from 'react';
import "./MealsForm.css";
import Input from '../../UI/Input';
import CartContext from "../../../store/cart-context"

function MealsForm(props) {
    
    const itemCtx = useContext(CartContext);
    const item = {
        name: props.name, price: props.price
    }
    const addToCartHandler = (event) => {
        event.preventDefault();
        let quantity =Number(document.getElementById("amount_"+props.id).value);
        itemCtx.addItems({...item,quantity:quantity});

    }
    return (
        <section className='myForm'>
            <form>
                <Input label="Amount" input={{
                    type: "number",
                    id: "amount_"+props.id,
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
                <div className='form-btn'>
                    <button type='submit' onClick={addToCartHandler}>+Add</button>
                </div>
            </form>

        </section>
    )
}

export default MealsForm
