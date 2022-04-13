import React, { useEffect, useState } from 'react';
import '../App.css';
import uuid from 'react-uuid';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { alignPropType } from 'react-bootstrap/esm/types';
import App from './footer';
/*
export default function Tilaus({cart, removeFromCart, updateAmount}) {
  const [inputs,_] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      inputs[i] = React.createRef();
    }
  }, [cart.length])

  useEffect(() => {
    if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
      inputs[inputIndex].current.focus();
    }
  },[cart])

  function changeAmount(e,product,index) {
    updateAmount(e.target.value, product);
    setInputIndex(index);
  }

  let sum = 0;
  
  return (    
    <div>
      <h3 className='header'>Tuotteet</h3>
      <table className='table'>
        <tbody>
          {cart.map((product, index) => {
            sum+=parseFloat(tuote.hinta);
            return (
              <tr key={uuid()}>
                <td>{tuotenimi}</td>
                <td>{product.price} €</td>
                <td>
                  <input ref={inputs[index]} style={{width: '60px'}} value={product.amount} onChange={e => changeAmount()} />
                </td>
                <td><a href ="#" onClick={() => removeFromCart(product)}>Poista tuote</a></td>
              </tr>
            )
          })}
          <tr key ={uuid()}>
            <td></td>
            <td>{sum.toFixed(2)} €</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}
*/
export default App;