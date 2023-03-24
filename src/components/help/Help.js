import React, { useState } from 'react';
import './Help.css';
import Partner from './components/Partner/Partner';
import Legal from './components/Legal/Legal';
import FAQ from './components/FAQs/FAQ';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

const Help = () => {

  
  return (
    <div className='mini-div'>
        
            <div className='toggle-div'>
            <Link to='/offers/partner'>Partner Onboarding</Link>
            <Link className='toggle' to='/offers/legal'>Legal</Link>
            <Link className='toggle' to='/offers/faq'>FAQs</Link>
          

            </div>
           
          
         
        

    </div>
  )
}

export default Help