import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

function App() {
  
  return (
    <div className="App">
      <h1>Lautapelikahvila Weleho</h1>
<Navbar bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">LOGO</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Etusivu</Nav.Link>
        <Nav.Link href="#action2">FAQ</Nav.Link>
        <NavDropdown title="Kategoriat" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Roolipelit</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Korttipelit</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Deck Building
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">
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
      <div class="row">
    <div class="col-8"><Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-10"
      src="../Kuvat\1782_1200x1200.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Tässä peli nro 1</h5>
      <p>Vau mikä peli. Haluaisit varmasti ostaa tämän!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-20"
      src="../Kuvat\pic332870.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Tässä peli nro 2</h5>
      <p>Vau mikä peli. Haluaisit varmasti ostaa tämän!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-30"
      src="../Kuvat\pic3518231.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Tässä peli nro 3</h5>
      <p>Vau mikä peli. Haluaisit varmasti ostaa tämän!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></div>
    <div class="col-4">Tähän alkaa syntyä meidän blogikirjoituksemme.
    <div class="suosittelut"></div>
    </div>
  </div>
  <footer>THIS IS FOOTER</footer>
  </div>
  );
}

export default App;
