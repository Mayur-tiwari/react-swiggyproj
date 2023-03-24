import React from 'react';
import './Signin.css'

const Signin = () => {
  return (
    <div className='login-div'>
        <p className='login-p'>Login</p>
        <p className='orange-p'>or <span className='orange'>create an account</span></p>
        <input className='input' placeholder='Phone Number'></input><br></br>
        <button className='login-btn' >LOGIN</button>
        <p className='tc'>By clicking on Login, I accept the <span className='black-span'>Terms & Conditions</span> <span> &</span><span className='black-span'> Privacy Policy</span></p>


    </div>
  )
}

export default Signin