import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    
    <div className='navbar'>
        <Link  to = '/'><img className='logo-img'  height={'150px'} src='https://i1.wp.com/anantacreative.com/wp-content/uploads/2020/10/Restaurant-Logo1.png?fit=1200%2C1200&ssl=1'></img></Link>
        <div className='navbar-inside'>
           <Link className='link' to = '/offers'> <img height={'20px'} src="https://img.icons8.com/ios/50/null/discount--v1.png"/>Offers</Link>
            <Link className='link' to ='/help'><img height={'20px'} src="https://img.icons8.com/ios/50/null/web-help.png"/>Help</Link>
            <Link className='link' to ='/signin'><img src="https://img.icons8.com/material-outlined/24/null/login-rounded-right.png"/>Sign in</Link>
            <Link className='link' to ='/cart'><img src="https://img.icons8.com/material-rounded/24/null/shopping-cart.png"/>Cart</Link>
            
            

        </div>

    
    </div>
  )
}

export default Header