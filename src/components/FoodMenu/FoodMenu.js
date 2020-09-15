import React, { useState } from 'react';

const FoodMenu = ({meal,setMeal}) => {
    const activeStyle ={
        color: "#f3316b",
        borderBottom: "3px solid #f3316b",
        borderRadius: "2px",
    }
    
    const [active, setActive] = useState(activeStyle)
    const handleMealType = (meal)=>{
        setMeal(meal);
        setActive(activeStyle)
        
    }
    return (
        <div className="shop__header">
            <h4 style={meal==="breakfast"?active:{}} onClick={()=>handleMealType("breakfast")}> Breakfast </h4>
            <h4 style={meal==="lunch"?active:{}} onClick={()=>handleMealType("lunch")}> Lunch </h4>
            <h4 style={meal==="dinner"?active:{}}onClick={()=>handleMealType("dinner")}> Dinner </h4>
        </div>
    );
};

export default FoodMenu;