import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

function App() {

        
  return (
<Navbar bg="white" expand="lg">
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

    </Navbar.Collapse>
  </Container>
</Navbar>
    
  );
}

export default App;