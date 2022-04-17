import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Pages/Nav';
import Footer from './Pages/footer';
import Etusivu from './Pages/Etusivu';
import FAQ from './Pages/kysymykset';
import Ostoskori from './Pages/Ostoskori';
import Lautapelit from './Pages/Lautapelit';
import Uutiset from './Pages/Uutiset';
import {Route, Routes} from 'react-router';
import {useState, useEffect} from 'react';

const url = 'http://localhost/verkkopalveluprojekti-backend/';

function App() {
  
  const [cart, setCart] = useState([]);

  function addToCart(tuote){
    const newCart=[...cart,tuote];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }
  
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
  <Nav url={url} cart={cart}/>
  <div>
    <Routes>
      <Route path='/Etusivu' element={<Etusivu url={url}/>}/>      
      <Route path='/kysymykset' element={<FAQ/>}/>
      <Route path='/Uutiset' element={<Uutiset/>}/>
      <Route path='/' element={<Etusivu/>}/>
      <Route path='/Ostoskori' element={<Ostoskori/>}/>
      {/* <Route path='/Ostoskori' element={<Ostoskori cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount()}/> }/> */}
      <Route path='/products/:tuoteryhmanro' element={<Lautapelit url={url} addToCart={addToCart}/>}/>      
      <Route path='/Uutiset' element={<Uutiset/>}/>
    </Routes>
  </div>

  
{/*Grid Layout alkaa tästä*/}
<Footer />
  </div>
  );
}

export default App;
