import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const URL = '';

function App() {
  
  return (
    <div className="App">

{/*Navbar alkaa tästä*/}

{/*Grid Layout alkaa tästä*/}

      <div className="row">
    <div className="col-7">

{/*Carousel alkaa tästä*/}

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
<br></br>
<p>
  Tuleeko tähän vielä jokin oma juttunsa? Kuukauden suosituimmat tuotteet? Alennukset?
</p>
</div>

{/*Grid Layout toinen puoli alkaa tästä*/}

    <div className="col-4">
    <div className="blogi">
      <h2></h2>
      <p></p>
    </div>
    <div className="suosittelut">
      <h2></h2>
        <p></p>
    </div>
    </div>
  </div>
  <footer className="info">
  <div className="container p-6">
    <div className="row">
      <div className="col-lg-3 col-md-10 mb-4 mb-md-0">
        <h5 className="text">Yritystiedot</h5>

        <p>
          p. 05050505050 <br></br>
          Tämä osoite on legit <br></br>
          xxxxxx OULU <br></br>
          asiakaspalvelu@weleho.com
          
        </p>
      </div>

     
      <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
      <img 
      src='../Kuvat/logo.png'
      className='alalogo'
      />
      </div>
      <div class="col-lg-5 col-sm-4 right" id="oikea">
               <h5 className="oikea">Löydät meidät myös somesta!</h5>

        <p>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href='#' class="fa fa-instagram"></a>
        <a href='#' class="fa fa-snapchat-ghost"></a>
        </p>
      </div>
    </div>
  </div>
  </footer>
  </div>
  );
}

export default App;
