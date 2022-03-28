import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Nav from './Pages/Nav';
import footer from './Pages/footer';
import Etusivu from './Pages/Etusivu';
import FAQ from './Pages/kysymykset';
import {Route, Routes} from 'react-router';

const URL = '';

function App() {
  
  return (
    <div className="App" >

    <div className='kauppaid'>
    
      <h1 > <span className='lautapelikauppa'>LAUTAPELIKAUPPA<br/></span>
        
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
  <div>
    <Routes>
      <Route path='/kysymykset' element={<FAQ/>}/>
      <Route path='/' element={<Etusivu/>}/>

    </Routes>
  </div>
{/*Grid Layout alkaa tästä*/}
<footer />
  </div>
  );
}

export default App;
