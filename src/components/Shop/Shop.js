import React, { useState } from 'react';
import "./Shop.css"
import foodsData from "../../fakeData/foods"
import FoodItem from '../FoodItem/FoodItem';
import FoodMenu from '../FoodMenu/FoodMenu';


const Shop = () => {
    const [foods,] = useState(foodsData);
    const [meal, setMeal] = useState('lunch');
    const food = foods.filter(fd => fd.meal === meal)
    
    return (
        <div>
            <FoodMenu meal={meal} setMeal={setMeal} > </FoodMenu>
            <div className="food__item">
            {
                food.map(fd => <FoodItem  
                    img={fd.img} key={fd.id} 
                    id={fd.id} name={fd.name} d
                    es={fd.des} price={fd.price}
                    > 
                    </FoodItem>)
            }
            </div>
            
        </div>
    );
};

export default Shop;