import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function UncontrolledExample() {
  return (
    <div className='imagge'>
    <Carousel>
        
      <Carousel.Item>
       
        <img  height={'300px'}
          className="d-block w-100 "
          src="	https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"
          alt="First slide"
          
        />
      

    
      
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      
   
      <Carousel.Item>
     
        <img height={'300px'} 
          className="d-block w-100"
          src="	https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"
          alt="Second slide"
        />
       


        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     
        <img  height={'300px'}
          className="d-block w-100"
          src="	https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ehchczipeejs7qrk82u6"
          alt="Third slide"
        />
       

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;