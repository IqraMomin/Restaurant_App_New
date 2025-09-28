import React from 'react'
import bgImg from "../../assets/Background.jpeg";
import "./Header.css";
import CartButton from './CartButton';

function Header(props) {
    return (
        <React.Fragment>
            <header className='header'>
                <h1>ReactMeals</h1>
                <CartButton onClick={props.onShowCart}/>
            </header>
            <div className='bg-div'>
            <img src={bgImg} alt='Great Meals at your service'/>
            </div>
        </React.Fragment>
    )
}

export default Header
