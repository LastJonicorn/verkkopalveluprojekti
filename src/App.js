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
import {Route, Routes} from 'react-router';
import {useState, useEffect} from 'react';

const url = 'http://localhost/verkkopalveluprojekti-backend/';

function App() {
  /*
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getIitem('cart')));
    }
  }, [])

  function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) + 1,product);
    } else {
      product['amount'] = 1;
      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));

    }
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item = item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
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
      <Route path='/products/:tuoteryhmanro' element={<Lautapelit url={url}/>}/>

    </Routes>
  </div>
  
{/*Grid Layout alkaa tästä*/}
<Footer />
  </div>
  );
}

export default App;
