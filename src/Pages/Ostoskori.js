import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

const URL = '';

function App() {
  
  return (    
    <div>
      <Nav />
      <div class="container">
        <div class="row">
            <div class="col-8">
                <h2>Ostoskori</h2>
                <p>Tuotteesi</p>
                <div id='OstoskoriTuote'>
                    <img src='../Kuvat/pic332870.jpg'/>
                    <p>Hinta: 45€</p>
                    <p>Tuotenumero: 123456789</p>

                    <img src='../Kuvat/pic332870.jpg'/>
                    <p>Hinta: 45€</p>
                    <p>Tuotenumero: 123456789</p>
                </div>
                <p>Maksutavat</p>
            </div>
            <div class="col-3">
                <h2>Yhteenveto</h2>
                <p>Maksa</p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default App;
