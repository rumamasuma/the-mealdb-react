import React from 'react';
import './OrderList';

const OrderList = (props) => {
    const {order} =props;
   ;
    const countReducer = (previous, meal) => previous + meal.quantity;
    const count = order.reduce(countReducer ,0);
     // console.log(order)
    return (
        <div>
             <h2>Order List</h2>
             <h4>Items Ordered :{count} </h4>
        </div>
    );
};

export default OrderList;