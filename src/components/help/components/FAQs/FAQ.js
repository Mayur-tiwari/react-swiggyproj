import React from 'react';
import {useState} from 'react';
import './FAQ.css';
import {Link} from 'react-router-dom'



const FAQ = () => {
    let[show1,setshow1] = useState(false)
    let[show2,setshow2] = useState(false)
    let[show3,setshow3] = useState(false)
    let[show4,setshow4] = useState(false)
    let[show5,setshow5] = useState(false)
  
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
             <Link  className='toggle'  to='/help/partner'>Partner Onboarding</Link>
             <Link className='toggle' to='/help/legal'>Legal</Link>
             <Link className='toggle' to='/help/faq'>FAQs</Link>
           </div>
             
             
            <div className='right-div'>
            <p className='partner'>FAQs</p>
            <div>
              <p onClick={gayab1} className='gayab-btn'>What is Swiggy Customer Care Number?{show1?<img className='drop' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-2.png"/>:<img className='drop' src="https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png"/>}</p>
             
              {show1? <div className='disappear'>
                <p className='small-text partner'>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in

Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>
                <button className='code-btn'>Send an email</button>
                <p className='small-text'>We will revert within 24-48 hrs</p>
              </div>:<div></div>}
             
              
            </div>
            <div>
              <p  onClick={gayab2} className='gayab-btn'>I want to explore career opportunities with Swiggy {show2?<img className='drop' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-2.png"/>:<img className='drop' src="https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png"/>}</p>
               {show2? <div className='disappear'>
                <p className='partner'>  Join our team</p>
                <button className='code-btn'>Send an email</button>
                <p className='small-text'>We will revert within 24-48 hrs</p>

               </div> :<div></div>}
            </div>
            <div >
              <p  onClick={gayab3} className='gayab-btn'>I want to provide feedback! {show3?<img className='drop' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-2.png"/>:<img className='drop' src="https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png"/>}</p>
              {show3?  <button className='code-btn'>Send an email</button>  :<div></div>}
            </div>
            <div >
              <p   onClick={gayab4} className='gayab-btn'>I want to cancel my order {show4?<img className='drop' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-2.png"/>:<img className='drop' src="https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png"/>}</p>
              {show4?  <p className='small=text'>Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents</p>  :<div></div>}
            </div>
            <div >
              <p  onClick={gayab5} className='gayab-btn'> I want to cancel my order {show5?<img className='drop' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-2.png"/>:<img className='drop' src="https://img.icons8.com/ios-glyphs/30/null/expand-arrow--v1.png"/>}</p>
              {show5?
                <p className='partner small-text'>We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.</p>
                :<div></div>} 
            </div>

          </div>

    </div>
  )
}

export default FAQ