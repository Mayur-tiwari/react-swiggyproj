import React from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';

const Cart = () => {
  return (
    <div className='cart-div'>
        <img height={'300px'} src='https://cdn1.iconfinder.com/data/icons/hobbies-and-free-time-2/64/Cooking-cook-food-kitchen-512.png'></img>
        <p className='cart-p'>Your Cart is Empty</p>
        <p className='cart-p2'>You can go to home page to view more restaurants</p>
      
        <Link to ='/'   className='cart-btn'>See Restaurants Near you</Link>


    </div>
  )
}

export default Cart