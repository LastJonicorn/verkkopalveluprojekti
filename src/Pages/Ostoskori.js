import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import uuid from 'react-uuid';
import axios from 'axios';

const url = 'http://localhost/verkkopalveluprojekti-backend/';

export default function Cart({cart,removeFromCart, empty}) {
  /* const [inputs,_] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1); */

  const [etunimi, setEtunimi] = useState('');
  const [sukunimi, setSukunimi] = useState('');
  const [osoite, setOsoite] = useState('');
  const [postinro, setPostinro] = useState('');
  const [postitmp, setPostitmp] = useState('');
  const [finished, setFinished] = useState(false);


  function order(e) {
    e.preventDefault();

    const json = JSON.stringify({
      etunimi : etunimi,
      sukunimi : sukunimi,
      osoite : osoite,
      postinro : postinro,
      postitmp : postitmp,
      cart : cart,
    });
    
    axios.post(url + 'order/save.php', json,{
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(() => {
      removeFromCart();
      setFinished(true);
    }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error);
    }); 
  } 

  let sum = 0;
  

if(finished === false){ 
  return(
    <div className='ostoskoritausta'>
      <h3 className='header-1'>Ostoskori</h3>
      <table className='table'>
        <tbody>
          {cart.map((tuote, index) => {
            sum+=parseFloat(tuote.hinta);
            return (
              <tr key ={uuid()}>
                <td>{tuote.tuotenimi}</td>
                <td>{tuote.hinta} € </td>
                <td><a href="#" onClick={() => removeFromCart(tuote)} >Poista</a></td>
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
      {cart.length > 0 && 
        <>
        <h3 className='header'> Asiakastiedot </h3>
        <form onSubmit={order} id="asiakastiedot">
          <div className='form-group'>
            <input id='tietokenttä' className='form-conrol' onChange={e => setEtunimi(e.target.value)}
             placeholder="Etunimi" />
          </div>
          <div className='form-group'>
            <input id='tietokenttä' className='form-conrol' onChange={e => setSukunimi(e.target.value)}
             placeholder="Sukunimi" />
          </div>
          <div className='form-group'>     
            <input id='tietokenttä' className='form-conrol' onChange={e => setOsoite(e.target.value)}
             placeholder="Osoite" />
          </div>
          <div className='form-group'>
            <input id='tietokenttä' className='form-conrol' onChange={e => setPostinro(e.target.value)}
             placeholder="Postinumero" />
          </div>
          <div className='form-group'>
            <input id='tietokenttä' className='form-conrol' onChange={e => setPostitmp(e.target.value)}
             placeholder="Postitoimipaikka" />
          </div>
          <div className='buttons'>
            <button className='btn btn-primary' id="tilausnappi"> Tilaa </button>
          </div>
        </form>
        </>      
      } 
    </div>
  )
} else {
  return (<h3> Kiitos tilauksestasi! </h3>);
  }

} 