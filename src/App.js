import './App.css';
// import {Route, Routes}from 'react-router-dom'
import {Routes, Route} from 'react-router-dom';
import Card from './components/cards/card'
import Data from "./data.json";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { useState } from 'react';
import Offers from './components/offers/Offers';
import Cart from './components/cart/Cart';
import Signin from './components/Signin/Signin';
import Help from './components/help/Help';
import Home from './components/Home/Home'
import Partner from './components/help/components/Partner/Partner';
import Legal from './components/help/components/Legal/Legal';
import FAQ from './components/help/components/FAQs/FAQ';


function App() {

 
  return (
   
      <div>
     <Header/>
     

      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/offers' element={<Offers/>}></Route>
        <Route exact path='/help/Partner' element={<Partner/>}></Route>
        <Route exact path='/help/legal' element={<Legal/>}></Route>
        <Route exact path='/help/faq' element={<FAQ/>}></Route>
        <Route exact path='/help' element={((<Help/>),(<Partner/>))  }></Route>
        <Route exact path='/signin' element={<Signin/>}></Route>
        <Route exact path='/cart' element={<Cart/>}></Route>

      </Routes>

      <Footer/>
      </div>
  
  
  
      


    
      
       
      
   
     
 
  );
}

export default App;
