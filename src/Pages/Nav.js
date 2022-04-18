import React, { createFactory } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Ostoskori from './Ostoskori';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';


export default function Nav({url,cart}) {
  const [categories, setCategories] = useState([]);


    useEffect(() => {
      console.log(url);
        axios.get(url + 'products/getcategories.php')
          .then((response) => {
            const json = response.data;
            setCategories(json);
            //console.log(json);
        }).catch (error => {
          alert(error.response === undefined ?  error : error.response.data.error);
        })
    }, [])
    

  
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src='../Kuvat/logo.png'/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link active" id="link" aria-current="page" to="/">Etusivu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="link" to="/kysymykset">FAQ</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="link" to="/Uutiset">Uutiset</Link>
        </li>
        <li className="nav-item dropdown" id="link">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kategoriat
          </a>
            <ul className="dropdown-menu" id="dropdown" aria-labelledby="navbarDropdown">
              {categories.map(tuoteryhma => (
                <li key={tuoteryhma.tuoteryhmanro}>
                  {<Link
                    className='dropdown-item'
                    to={'/products/' + tuoteryhma.tuoteryhmanro}>{tuoteryhma.tuoteryhmanimi}</Link>}
                </li>
              ))}
          </ul>
        </li>
          <li className="nav-item" id="Ostoskorilinkki">
             <a href="/Ostoskori">
            <img className='OstoskoriKuvake' src='../Kuvat/ShoppingCart.png' href="/Ostoskori"/>
            <span className='OstoskoriLuku'>{cart.length}</span>
            </a>
          </li>
      </ul>
    </div>
  </div>
</nav>


    
  );
}

