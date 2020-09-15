import React from 'react';
import './FoodDetail.css'
import { useParams } from 'react-router-dom';
import foodsData from '../../fakeData/foods';

const FoodDetail = () => {
    const {foodId}= useParams();
    const singleFood = foodsData.find(fd =>fd.id == foodId);
    return (
        <div className="food__detail">
            <div className="food__info">
                <h1> {singleFood.name} </h1>
                <p> {singleFood.des} </p>
                <h1> {singleFood.price} </h1>
                <button> Add </button>
            </div>
            <div className="food__img">
                <img src={singleFood.img} alt=""/>
            </div>
        </div>
    );
};

export default FoodDetail;