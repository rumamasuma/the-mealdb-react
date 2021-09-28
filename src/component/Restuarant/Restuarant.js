import React, { useEffect, useState } from 'react';
import { addToDb, getDb } from '../../localStorage/localStorage';
import Meal from '../Meal/Meal';
import OrderList from '../OrderList/OrderList';
import './Restuarant.css';

const Restuarant = () => {
const [meals, setMeals] = useState([]);
// console.log(meals);
const [order, setOrder] = useState([]);



useEffect(() =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res => res.json())
    .then(data => setMeals(data.meals));
},[]);

// save to local storage
    useEffect(() =>{
    // console.log('call to local storage')
     if(meals.length){
    const savedDb = getDb();
    // console.log(savedDb);
    const saveOrder = [];
    for(const mealId in savedDb) {
            //  console.log(mealId);
             const meal = meals.find(ml => ml.idMeal == mealId)
            //  console.log(mealId , meal);
            const quantity = savedDb[mealId];
             meal.quantity = quantity ;   
            saveOrder.push(meal);
            }
           setOrder(saveOrder); 
        }
}, [meals]);

// event handler function
const handleAddToOrder = meal =>{
    const newOrder = [...order , meal];
    setOrder(newOrder);
    // local storage 
    addToDb(meal.idMeal);
}
    return (
        <div className ='row restuarant-menu p-4'>
            <div className="meals-container col-md-9">
                <div className ='row'>
                   {
                       meals.map(meal => <Meal key ={meals.idMeal}
                        meal = {meal}
                        handleAddToOrder ={handleAddToOrder}
                       ></Meal>)
                   }

                </div>
            </div>
            <div className="order-list col-md-3 border">
                <OrderList  order={order} ></OrderList>
                 
            </div>
        </div>
    );
};

export default Restuarant;