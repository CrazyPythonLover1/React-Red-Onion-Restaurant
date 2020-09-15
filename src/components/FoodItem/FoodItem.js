import React from 'react';

const FoodItem = ({img,id,name,des,price}) => {
    return (
        <div>
            <img src={img} alt=""/>
                <h1> {id} </h1>
                <h3> {name} </h3>
                <p> {des}</p>
                <h1> {price} </h1>
        </div>
    );
};

export default FoodItem;