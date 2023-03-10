import React from 'react'
import './header.css'

const Header = () => {
  return (
    
    <div className='navbar'>
        <img height={'150px'} src='https://i1.wp.com/anantacreative.com/wp-content/uploads/2020/10/Restaurant-Logo1.png?fit=1200%2C1200&ssl=1'></img>
        <div className='navbar-inside'>
            <a><img src="https://img.icons8.com/material-rounded/24/null/search-more.png"/>Search</a>
            <a><img height={'20px'} src="https://img.icons8.com/ios/50/null/discount--v1.png"/>Offers</a>
            <a><img height={'20px'} src="https://img.icons8.com/ios/50/null/web-help.png"/>Help</a>
            <a><img src="https://img.icons8.com/material-outlined/24/null/login-rounded-right.png"/>Sign in</a>
            <a><img src="https://img.icons8.com/material-rounded/24/null/shopping-cart.png"/>Cart</a>

        </div>

    
    </div>
  )
}

export default Header