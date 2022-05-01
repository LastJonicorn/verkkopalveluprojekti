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
import Palaute from './Pages/Palaute';
import KategoriaLista from './Pages/KategoriaLista';
import KategoriaLisays from './Pages/KategoriaLisays';


import {Route, Routes} from 'react-router';
import {useState, useEffect} from 'react';


const url = 'http://localhost/verkkopalveluprojekti-backend/';

function App() {
  
  const [cart, setCart] = useState([]);

    useEffect(() => {
      if('cart' in localStorage) {
        setCart(JSON.parse(localStorage.getItem('cart')));
      }
    }, [])
 
  function addToCart(tuote){
    if (cart.some( tuote => tuote.tuotenimi === tuote.tuotenro)) {
      const existingProduct = cart.filter(tuote => tuote.tuotenimi === tuote.tuotenro);
      //updateAmount(parseInt(existingProduct[0].amount) +1, tuote);
    } else {
    const newCart=[...cart,tuote];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
    }
  } 

  function removeFromCart(poistettavaTuote) {
    const itemsWithoutRemoved = cart.filter(tuote => tuote.tuotenro !== poistettavaTuote.tuotenro);
    //const removedItem = cart.find(tuote => tuote.tuotenro === poistettavaTuote.tuotenro);
    // Uusi array, delete object javascript splice esimerkkiä voi kattoo sivulta ''love2dev''
    //console.log(removedItem);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

   function updateAmount(amount, tuote) {
    tuote.amount = amount;
    const index = cart.findIndex((tuote => tuote.tuotenimi === tuote.tuotenro));
    const modifiedCart = Object.assign([...cart],{[index]: tuote});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
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
      <Route path='/Ostoskori' element={<Ostoskori cart={cart} removeFromCart={removeFromCart}  updateAmount={updateAmount} /> }/> 
      <Route path='/products/:tuoteryhmanro' element={<Lautapelit url={url} addToCart={addToCart}/>}/>     
      <Route path='/products/:tuotenro' element={<Lautapelit url={url}/>}/>      
      <Route path='/Uutiset' element={<Uutiset/>}/>
      <Route path='/Palaute' element={<Palaute/>}/>
      <Route path='/KategoriaLista' element={<KategoriaLista url={url}/>}/>
      <Route path='/KategoriaLisays' element={<KategoriaLisays url={url}/>}/>

    </Routes>
  </div>

  
{/*Grid Layout alkaa tästä*/}
<Footer />
  </div>
  );
}

export default App;
