import React from 'react';
import MealsItem from './MealsItem/MealsItem';
import "./AvailableMeals.css";
import Card from "../Card/Card";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

function AvailableMeals() {
    return (
        <section className='meals'>
        <Card>
            <ul>
                {DUMMY_MEALS.map(meal=>{
                    return (
                    <div>
                    <MealsItem key={meal.id} name={meal.name} price={meal.price} id={meal.id} description={meal.description}/>
                    </div>
                    )
                })}
            </ul>
        </Card>
        </section>
    )
}

export default AvailableMeals
