import React from 'react';
import './Home.css';
import { useState,useEffect } from 'react';
import Data from '../../data.json';
import Card from '../cards/card';
import UncontrolledExample from '../carousel/Carousel';


const Home = () => {
    let [searchtext,setsearchtext] = useState('')
    const  [jsondata,setjsondata] = useState(Data)
    useEffect(()=>{ getResaurantsData()},[])

    async function getResaurantsData(){
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING')
      const json = await data.json()     
      console.log(json);   
      console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);   
     // setAllRestaurantList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  }
  
    let searchresto =(Data,searchtext) =>{
      let filtereddata = Data.filter((item)=>{
       
        if( item.data.data.name.toLowerCase().includes(searchtext.toLowerCase())){
          return item
          } 
       
    });
    console.log(filtereddata);
    setjsondata(filtereddata)
  
  }
   function oninputchange(e){
    setsearchtext(e.target.value)
    if(e.target.value ===''){
      setjsondata(Data)
    }
  
   }
  return (
    <div>
           <div className='search-div'>
       <input onChange={oninputchange} value={searchtext} className='input-s'></input>
       <button onClick={()=>(searchresto(Data,searchtext))}  className='btn-1'>Search</button>

       </div>
       <UncontrolledExample/>


  
       <div className='resto'>
       {jsondata.map((item) => {
        return <Card key={item.data.data.id} Data={item} />;

      })}
       </div>
    </div>
  )
}

export default Home









// async function getResaurantsData(){
//   const data = await fetch(API_URL)
//   const json = await data.json()        
//   setFilteredRestaurantList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
//   setAllRestaurantList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
// }