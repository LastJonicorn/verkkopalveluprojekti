import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function App() {
  
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
            <Link class="dropdown-item" to="/Lautapelit">Lautapelit</Link>
            <Link class="dropdown-item" to="/Korttipelit">Korttipelit</Link>
            <li><a class="dropdown-item" href="#">Strategiapelit</a></li>
            <li><a class="dropdown-item" href="#">Koko perheelle</a></li>
            <li><a class="dropdown-item" href="#">Roolipelit</a></li>
            <li><a class="dropdown-item" href="#">Nopat</a></li>
            <li><a class="dropdown-item" href="#">Miniatyyrit</a></li>
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

export default App;