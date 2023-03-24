import React from 'react';


import './card.css'

const Card = ({ Data }) => {
  const detail = Data.data.data;

  return (
    <div>
      
          <div className='card'>
        
        <img className='image' src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${detail.cloudinaryImageId}`} ></img>

        <p className='rest-name'>{detail.name}</p>
        <p className='area'>{detail.area}</p>
        <p className='category'>{detail.cuisines?.join(',')}</p>
        <div className='flex'>
          <div className='rating-div'>
            <p className='rating'><img src="https://img.icons8.com/material-outlined/24/000000/starburst-shape.png" />{detail.avgRating}</p>
          </div>

          <p className='timing'>{detail.maxDeliveryTime} min</p>
          <p className='price'>{detail.costForTwoString}</p>

        </div>
        <p className='discount'></p>
        <button className='btn'>Order Now</button>



      </div>

    </div>
   
  




  


  )
}

export default Card