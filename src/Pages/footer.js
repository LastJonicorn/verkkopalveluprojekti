import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function App() {
  
  return (

<footer className="info">
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
  </footer>
  );
}

export default App;