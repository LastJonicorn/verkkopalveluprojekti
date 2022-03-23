import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { useEffect } from 'react';

const URL = '';

function App() {
  
  return (
    <div className="App">
      <h1>Lautapelikauppa Weleho</h1>

{/*Navbar alkaa tästä*/}

<Navbar bg="dark" expand="lg" sticky="top" >
  <Container fluid>
    <Navbar.Brand href="#"><p class="navtext">LOGO</p></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1"><p class="navtext">Etusivu</p></Nav.Link>
        <Nav.Link href="#action2"><p class="navtext">FAQ</p></Nav.Link>
        <NavDropdown title="Kategoriat" class="navtext" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Roolipelit</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Korttipelit</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Deck Building</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" class="navtext">
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Hae"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Hae</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

{/*Grid Layout alkaa tästä*/}

      <div class="row">
    <div class="col-7">

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
      <h5 class="pelinimi">Tässä peli nro 2</h5>
      <p class="kuvaus">Vau mikä peli. Haluaisit varmasti ostaa tämän!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-30"
      src="../Kuvat\pic3518231.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5 class="pelinimi">Tässä peli nro 3</h5>
      <p class="kuvaus">Vau mikä peli. Haluaisit varmasti ostaa tämän!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></div>

{/*Grid Layout toinen puoli alkaa tästä*/}

    <div class="col-4">
    <div class="blogi">
      <h2>Tähän alkaa syntyä meidän blogikirjoituksemme.</h2>
      <p>Tänään söimme leipää</p>
    </div>
    <div class="suosittelut">
      <h2>Tähän alkaa syntyä meidän suosittelumme.</h2>
        <p>Suosittelen lihaa</p>
    </div>
    </div>
  </div>
  <footer>THIS IS FOOTER</footer>
  </div>
  );
}

export default App;
