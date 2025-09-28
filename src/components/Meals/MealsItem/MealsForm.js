import React from 'react';
import "./MealsForm.css";
import Input from '../../UI/Input';

function MealsForm() {
    return (
        <section className='myForm'>
            <form>
            <Input label="Amount" input={{
                type:"number",
                id:"amount",
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
                }}/>
            <div className='form-btn'>
                <button type='submit'>+Add</button>
            </div>
            </form>

        </section>
    )
}

export default MealsForm
