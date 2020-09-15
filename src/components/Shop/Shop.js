import React, { useState } from 'react';
import "./Shop.css"
import foodsData from "../../fakeData/foods"
import FoodItem from '../FoodItem/FoodItem';


const Shop = () => {
    const [foods, setFoods] = useState(foodsData);
    const [meal, setMeal] = useState('lunch');

    const activeStyle ={
        color: "#f3316b",
        borderBottom: "3px solid #f3316b",
        borderRadius: "2px",
    }
   
    const [active, setActive] = useState(activeStyle)

    const food = foods.filter(fd => fd.meal === meal)
    
    const handleMealType = (meal)=>{
        setMeal(meal);
        setActive(activeStyle)
        
    }
    
   
    
    return (
        <div>
            <div className="shop__header">
            <h4 style={meal==="breakfast"?active:{}} onClick={()=>handleMealType("breakfast")}> Breakfast </h4>
            <h4 style={meal==="lunch"?active:{}} onClick={()=>handleMealType("lunch")}> Lunch </h4>
            <h4 style={meal==="dinner"?active:{}}onClick={()=>handleMealType("dinner")}> Dinner </h4>
            </div>
            
            {
                food.map(fd=><FoodItem img={fd.img} key={fd.id} id={fd.id} name={fd.name} des={fd.des} price={fd.price}> </FoodItem>)
            }
        </div>
    );
};

export default Shop;