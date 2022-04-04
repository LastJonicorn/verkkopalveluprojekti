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
<br/><br/>
<div>
  <p id='ale'>Alennetut hinnat!!!!</p>
  <div id='alekuvat'>
    <img
      className="ale"
      src="../Kuvat\pic3518231.jpg"
      alt="Third slide"
    />
    <img
    className="ale"
    src="../Kuvat\pic3518231.jpg"
    alt="Third slide"
    />
    <img
    className="ale"
    src="../Kuvat\pic3518231.jpg"
    alt="Third slide"
    />
  </div>
</div>
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
  </div>
  );
}

export default App;
