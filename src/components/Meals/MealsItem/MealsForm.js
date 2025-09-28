import React from 'react';
import "./MealsForm.css";

function MealsForm() {
    return (
        <section className='myForm'>
            <form>
            <div className='amount'>
                <label htmlFor='amount'>Amount</label>
                <input id='amount' type='number'/>
            </div>
            <div className='form-btn'>
                <button type='submit'>+Add</button>
            </div>
            </form>

        </section>
    )
}

export default MealsForm
