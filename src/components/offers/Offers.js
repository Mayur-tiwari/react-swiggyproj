import React from 'react';
import './Offers.css';

const Offers = () => {
  return (
    <div>
        <div className='upperdiv'>
            <div className='p-div'>
            <p className='p1'>Offers for you</p>
            <p className='p2'>Explore top deals and offers exclusively for you!</p>
            </div>
            <div className='img'><img height={'250px'} src='https://cdn4.iconfinder.com/data/icons/flat-pro-business-set-1/32/sale-green-512.png'></img></div>
            

        </div>
        <p className='payment'>Payment offers/coupens:</p>
        <div className='lowerdiv'>
            <div className='coupen'>
                <div className='logo-div'>
                    <img height={'25px'} src='data:image/png;base64,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'></img>
                    <p>PAYTMFEST</p>
                </div>
                <p className='cashback'>Get assured cashback between Rs. 25 to Rs. 100
                   using Paytmwallet</p>
                <p className='cashback2'>Assured cashback between RS.25 to Rs. 100 on Paytm
wallet transactions above Rs. 399</p>
                <button className='code-btn'>COPY CODE</button>
            </div>
            <div className='coupen'>
                <div className='logo-div'>
                    <img height={'25px'} src='https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon-500x333.png'></img>
                    <p>BOBDC125</p>
                </div>
                <p className='cashback'>Get 20% discount using Bank of Baroda Debit Cards</p>
                <p className='cashback2'>Maximum discount up to ₹125 on orders above ₹299</p>
                <button className='code-btn'>COPY CODE</button>
            </div>
            <div className='coupen'>
                <div className='logo-div'>
                    <img height={'25px'} src='https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/1f/30/10/1f3010a8-d9dc-4147-7212-e8474dfc1538/AppIcon-0-0-1x_U007emarketing-0-0-0-9-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png'></img>
                    <p>150AXIS</p>
                </div>
                <p className='cashback'>Get 25% discount using Axis Bank Delight Debit Cards</p>
                <p className='cashback2'>Maximum discount up to ₹150 on orders above ₹400</p>
                <button className='code-btn'>COPY CODE</button>
            </div>

        </div>

    </div>
  )
}

export default Offers