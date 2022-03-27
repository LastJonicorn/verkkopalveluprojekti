import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

function App() {

        
  return (
<Navbar bg="white" expand="lg" className='Navbar'>
  <Container fluid>
    <Navbar.Brand href="#">
      <img 
      src='../Kuvat/logo.png'
      className='logo'
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg0"
        style={{ maxHeight: '100px'}}
        navbarScroll
      >
        <Nav.Link href="#action1">Etusivu</Nav.Link>
        <Nav.Link href="#action2">FAQ</Nav.Link>
        <NavDropdown title="Kategoriat" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Lautapelit</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Roolipelit</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Korttipelit</NavDropdown.Item>
          <NavDropdown.Item href="#action6">Deck Building</NavDropdown.Item>
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