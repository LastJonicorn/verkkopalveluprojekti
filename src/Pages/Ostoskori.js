import React, { useEffect, useState } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function Cart({cart}) {

  //console.log(cart.length)
  return(
    <>
      <img className='OstoskoriKuvake' src='../Kuvat/ShoppingCart.png'/>
      <span className='OstoskoriLuku'>{cart.length}</span>
    </>
  )
}
