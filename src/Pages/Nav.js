import React, { createFactory } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

const url = 'http://localhost/verkkokauppaprojekti-backend/';


export default function Navi({url}) {
  const [categories, setCategories] = useState([]);


    useEffect(() => {
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
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src='../Kuvat/logo.png'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" id="link" aria-current="page" to="/">Etusivu</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" id="link" to="/kysymykset">FAQ</Link>
        </li>
        <li class="nav-item dropdown" id="link">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kategoriat
          </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              {categories.map (tuoteryhma => (
                <li key={tuoteryhma.tuoteryhmanro}>
                  {<Link
                    className='dropdown-item'
                    to={'/products/' + tuoteryhma.tuoteryhmanro} > {tuoteryhma.tuoteryhmanimi}
                  </Link>}
                </li>
              ))}
          </ul>
        </li>
            <li class="nav-item">
              <Link class="nav-link" id="Ostoskori" to="/Ostoskori"><img src='../Kuvat/ShoppingCart.png'/></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    
  );
}

