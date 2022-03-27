import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Pages/Nav';
import Etusivu from './Pages/Etusivu';

const URL = '';

function App() {
  
  return (
    <div className="App" >

    <div className='kauppaid'>

      <h1>
        LAUTAPELIKAUPPA<br/> 
        <p className='weleho'>WELEH
        <img 
          src='../Kuvat/Koriste2.png'
          className='pallo'
        />
        </p>      
      </h1>
    </div>

{/*Navbar alkaa tästä*/}
  <Nav />
{/*Grid Layout alkaa tästä*/}

<Etusivu />
  </div>
  );
}

export default App;
