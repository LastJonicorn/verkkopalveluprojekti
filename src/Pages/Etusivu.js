import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const URL = 'http://localhost:8888/verkkokauppaprojekti-backend/';

function App() {
  
  return (
    <div className="App">

{/*Navbar alkaa tästä*/}

{/*Grid Layout alkaa tästä*/}
  <div className='container'>
    <div className="row">
      <div className="col-2">
        
        {/* SIDEBAR */}
        <ul class="nav flex-column" id="sidebar">
          <li class="nav-item" id="sivukategoria">
            <a class="nav-link"  id="kategoriaTxt" href="#">Lautapelit</a>
          </li>
          <li class="nav-item"  id="sivukategoria">
            <a class="nav-link"  id="kategoriaTxt" href="#">Korttipelit</a>
          </li>
          <li class="nav-item"  id="sivukategoria">
            <a class="nav-link"  id="kategoriaTxt" href="#">Strategiapelit</a>
          </li>
          <li class="nav-item"  id="sivukategoria">
            <a class="nav-link"  id="kategoriaTxt" href="#">Koko perheelle</a>
          </li>
          <li class="nav-item"  id="sivukategoria">
            <a class="nav-link"  id="kategoriaTxt" href="#">Roolipelit</a>
          </li>
          <li class="nav-item"  id="sivukategoria">
            <a class="nav-link"  id="kategoriaTxt" href="#">Nopat</a>
          </li>
          <li class="nav-item"  id="sivukategoria">
            <a class="nav-link"  id="kategoriaTxt" href="#">Miniatyyrit</a>
          </li>
        </ul>
    </div>


{/*Carousel alkaa tästä*/}
    <div className='col-6' id='carousel'>
      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="../Kuvat\carcassonne-the-princess-the-dragon-nordic-2925iA9D2C7A24C5CBDD72EA339CC093B9330A8EBE9A7.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 class="pelinimi">Tässä peli nro 1</h5>
          <p class="kuvaus">Vau mikä peli. Haluaisit varmasti ostaa tämän!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src="../Kuvat\pic332870.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="peliteksti">
            <h5 className="pelinimi">Tässä peli nro 2</h5>
            <p className="kuvaus">Vau mikä peli. Haluaisit varmasti ostaa tämän!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="../Kuvat\pic3518231.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="pelinimi">Tässä peli nro 3</h5>
          <p className="kuvaus">Vau mikä peli. Haluaisit varmasti ostaa tämän!</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>

<br/><br/>

    <div className="col" id="ale">
    <ul class="nav flex-column" id="ale" > 
          <li class="nav-item" id="aletuote">
            <a class="nav-link" href="#">aletuote</a>
            <img src="..\Kuvat\i25369691w800h465.jpg" id="alekuva"/>
          </li>
          <li class="nav-item"  id="aletuote">
            <a class="nav-link" href="#">aletuote</a>
            <img src="../Kuvat/1782_1200x1200.jpg" id="alekuva"/>
          </li>
          <li class="nav-item"  id="aletuote">
            <a class="nav-link" href="#">aletuote</a>
            <img src="../Kuvat/4015566033481xxl.jpg" id="alekuva"/>
          </li>
    </ul>
    </div>

</div>


{/*Grid Layout alapuoli alkaa tästä*/}
<div class="container">
  <div class="row">
      <div class="col"></div>
      <div class="col" id="suosittelut"> SUOSITTELUT </div>
      <div class="col" id="blogi"> BLOGI </div>
  </div>
</div>

</div>
</div>
  
  );
}

export default App;
