import './App.css';
import Card from './components/cards/card'
import Data from "./data.json";
import Header from './components/header/header';
import Footer from './components/footer/footer';


function App() {
  return (
   
    <div className="App">
       <Header/>
       <div className='resto'>
       {Data.map((item) => {
        return <Card key={item.data.data.id} Data={item} />;

      })}

       </div>
       <Footer/>
   
     


 
    </div>
  );
}

export default App;
