import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Nav from './Pages/Nav';
import Footer from './Pages/footer';
import Etusivu from './Pages/Etusivu';
import FAQ from './Pages/kysymykset';
import Ostoskori from './Pages/Ostoskori';
import Lautapelit from './Pages/Lautapelit';
import Uutiset from './Pages/Uutiset';
import Cart from './Pages/Ostoskori';
import {Route, Routes} from 'react-router';
import {useState, useEffect} from 'react';
import Products from './Pages/Lautapelit';

const url = 'http://localhost/verkkopalveluprojekti-backend/';

function App() {
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])
  function addToCart(tuote){
    const newCart=[...cart,tuote];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }/*
  function addToCart(tuote) {
    if (cart.some(item => item.id === tuotenimi)) {
      const existingProduct = cart.filter(item => item.id === tuotenimi);
      updateAmount(parseInt(tuote[0].amount) + 1, tuote);
    } else {
      tuote['amount'] = 1;
      const newCart = [...cart,tuote];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));

    }
  }*/
/*
  function removeFromCart(tuote) {
    const itemsWithoutRemoved = cart.filter(tuote = tuotenro !== tuotenimi);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount, tuote) {
    tuote.amount = amount;
    const index = cart.findIndex((item => item.id === tuoteryhmanro));
    const modifiedCart = Object.assign([...cart],{[index]: tuote});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }
  */
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
  <Nav url={url} />
  <div>
    <Routes>
      <Route path='/kysymykset' element={<FAQ/>}/>
      <Route path='/Uutiset' element={<Uutiset/>}/>
      <Route path='/' element={<Etusivu/>}/>
      <Route path='/Ostoskori' element={<Ostoskori/>}/>
      <Route path='/products/:tuoteryhmanro' element={<Products url={url} addToCart={addToCart} />} />
      {/* <Route path='/Ostoskori' element={<Ostoskori cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount()}/> }/> */}
      <Route path='/products/:tuoteryhmanro' element={<Lautapelit url={url}/>}/>      
      <Route path='/Uutiset' element={<Uutiset/>}/>
    </Routes>
  </div>

  
{/*Grid Layout alkaa tästä*/}
<Footer />
  </div>
  );
}

export default App;
