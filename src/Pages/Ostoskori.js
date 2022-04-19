import React, { useEffect, useState } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import uuid from 'react-uuid';
import { createRef } from 'react/cjs/react.production.min';



export default function Cart({cart,removeFromCart,updateAmount}) {
  const [inputs,_] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);

  useEffect(() =>{
    for (let i = 0; i < cart.length; i++){
      inputs[i] = React.createRef();
    }
  },[cart.length])

  useEffect(() => {
    if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
      inputs[inputIndex].current.focus();
    }
  },[cart])

  function changeAmount(e,tuote,index) {
    updateAmount(e.target.value, tuote);
    setInputIndex(index);
  }

  let sum = 0;

  //console.log(cart.length)
  return(
    <div className='ostoskoritausta'>
      <h3 className='header-1'>Valitsemasi tuotteet</h3>
      <table className='table'>
        <tbody>
          {cart.map((tuote,index) => {
            sum+=parseFloat(tuote.tuotehinta);
            return (
              <tr key ={uuid()}>
                <td>{tuote.tuotenimi}</td>
                <td>{tuote.hinta} € </td>
                <td><a href="#" onClick={() => removeFromCart(tuote)}>Poista</a></td>
              </tr>
            )
          })}
          <tr key={uuid() }>
            <td></td>
            <td className="total">TOTAL : {sum.toFixed(2)} €</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
