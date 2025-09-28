import React from 'react';
import "./Input.css";

function Input(props) {
    return (
        <div className='amount'>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>
        </div>
    )
}

export default Input
