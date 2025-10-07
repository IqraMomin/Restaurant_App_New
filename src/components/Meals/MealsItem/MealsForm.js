import React, { useRef, useState } from 'react';
import "./MealsForm.css";
import Input from '../../UI/Input';

function MealsForm(props) {

    const amountInput = useRef();

    const [amountIsValid, setAmountIsValid] = useState(true);
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInput.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || 
        enteredAmountNumber > 5 || enteredAmountNumber < 1) {
            setAmountIsValid(false);
            return;
        }
        props.onAdd(enteredAmountNumber);
    }
    return (
        <section className='myForm'>
            <form onSubmit={submitHandler}>
                <Input label="Amount" ref={amountInput} input={{
                    type: "number",
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
                <div className='form-btn'>
                    <button type='submit'>+Add</button>
                    {!amountIsValid && <p>Amount should be between 1-5</p>}
                </div>
            </form>

        </section>
    )
}

export default MealsForm
