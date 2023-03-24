import { className } from 'postcss-selector-parser';
import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom'
import './Partner.css'


const Partner = () => {
    let[show1,setshow1] = useState(false)
    let[show2,setshow2] = useState(false)
    let[show3,setshow3] = useState(false)
    let[show4,setshow4] = useState(false)
    let[show5,setshow5] = useState(false)
    let[bgc,setbgc] = useState(false)
  
    function gayab1(){
      setshow1(!show1);
      
     
    }
    function gayab2(){
      setshow2(!show2);
     
    }
    function gayab3(){
      setshow3(!show3);
     
    }
    function gayab4(){
      setshow4(!show4);
     
    }
    function gayab5(){
      setshow5(!show5);
     
    }
   
  return (
    <div className='div'>
            <div className='three-div'>
             <Link   className= 'toggle' to='/help/partner'>Partner Onboarding</Link>
             <Link className='toggle' to='/help/legal'>Legal</Link>
             <Link className='toggle' to='/help/faq'>FAQs</Link>
           </div>
             
      
        
         <div className='right-div'>
            <p className='partner'>Partner Onboarding</p>
            <div>
              <p onClick={gayab1} className='gayab-btn'>I want to partner my restaurant with Swiggy{show1?<img className='drop' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-2.png"/>:<img className='drop' src="https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png"/>}</p>
             
              {show1? <div className='disappear'>
                <p className='partner'>Partner with us</p>
                <button className='code-btn'>Send an email</button>
                <p className='small-text'>We will revert within 24-48 hrs</p>
              </div>:<div></div>}
             
              
            </div>
            <div>
              <p  onClick={gayab2} className='gayab-btn'>What are the mandatory documents needed to list my restaurant on Swiggy? {show2?<img className='drop' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-2.png"/>:<img className='drop' src="https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png"/>}</p>
               {show2? <div className='disappear'>
                <p className='partner'>  Copies of the below documents are mandatory</p>

                <p className='document'>-  FSSAI Licence OR FSSAI Acknowledgement</p>
                <p className='document'>-  Pan Card</p>
                <p className='document'>-  GSTIN Certificate</p>
                <p className='document'>-  Cancelled Cheque OR bank Passbook</p>
                <p className='document'>-  Menu</p>

               </div> :<div></div>}
            </div>
            <div >
              <p  onClick={gayab3} className='gayab-btn'>After I submit all documents, how long will it take for my restaurant to go live on Swiggy? {show3?<img className='drop' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-2.png"/>:<img className='drop' src="https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png"/>}</p>
              {show3?  <p  className='disappear partner'>After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform.</p> :<div></div>}
            </div>
            <div >
              <p   onClick={gayab4} className='gayab-btn'>What is this one time Onboarding fees? Do I have to pay for it while registering? {show4?<img className='drop' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-2.png"/>:<img className='drop' src="https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png"/>}</p>
              {show4? <p className='disappear partner'>This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy.</p>  :<div></div>}
            </div>
            <div >
              <p  onClick={gayab5} className='gayab-btn'>Who should I contact if I need help & support in getting onboarded? {show5?<img className='drop' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-2.png"/>:<img className='drop' src="https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png"/>}</p>
              {show5? <div className='disappear'>
                <p className='partner'>You can connect with Partner Support on 080-67466777/68179777 or write to partnersuport@swiggy.in</p>
                <button className='code-btn'>Send an email</button>
                <p className='small-text'>We will revert within 24-48 hrs</p>
              </div> :<div></div>} 
            </div>

          </div>


    </div>
  )
}

export default Partner