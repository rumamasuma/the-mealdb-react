import React from 'react';
import './Meal.css';

const Meal = (props) => {
    // console.log(props.meal);
    const {strMeal,strInstructions, strMealThumb } =props.meal;

    // handle add to order button
const {handleAddToOrder , meal} = props;
    return (
        <div className = "col-md-4">
      <div className = 'meal'  >
     <div  >
     <img src={strMealThumb} alt="" /> 
     </div>
         <h4> {strMeal}</h4>
         <p>{strInstructions.slice(0, 100)}</p>
         <button onClick ={() => handleAddToOrder(meal)} 
          className ="button">Add to Order</button>
      </div>
        </div>
    );
};

export default Meal;