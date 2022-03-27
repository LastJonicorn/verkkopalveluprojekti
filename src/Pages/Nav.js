import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

function App() {

        
  return (
<Navbar bg="white" expand="lg" id='navbar'>
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
        <Nav.Link id="link" href="#action1">Etusivu</Nav.Link>
        <Nav.Link id="link" href="#action2">FAQ</Nav.Link>
        <NavDropdown title="Kategoriat" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Roolipelit</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Korttipelit</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Deck Building
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" id="link">
          Link
        </Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>
    
  );
}

export default App;