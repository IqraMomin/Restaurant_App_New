import React from 'react'
import bgImg from "../../assets/Background.jpeg";
import "./Header.css";
import CartButton from './CartButton';

function Header() {
    return (
        <React.Fragment>
            <header className='header'>
                <h1>ReactMeals</h1>
                <CartButton />
            </header>
            <div className='bg-div'>
            <img src={bgImg} alt='Great Meals at your service'/>
            </div>
        </React.Fragment>
    )
}

export default Header
