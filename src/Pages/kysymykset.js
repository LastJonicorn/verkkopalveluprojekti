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
        <div class="col-6">      
          <h3 className='kysymys'>Voinko toivoa tiettyä peliä valikoimiinne?</h3>
          <p className='vastaus'>
            Kyllä. Voit lähettää meille sähköpostia otsikolla "pelitoive" ja toivoa haluamaasi peliä valikoimiimme. <br/>
            Jos saamme tarpeeksi toiveita tietyistä peleistä niin lisäämme ne varmasti valikoimaan tulevaisuudessa.
          </p>

          <h3 className='kysymys'>Tuotteeni on aina loppu? Miksi?</h3>
          <p className='vastaus'>
            Varastomme ovat ikävä kyllä rajalliset ja osa tuotteistamme on selvästi toivotumpia kuin toiset.
            Halutessasi voit jättää tuotteen kohdalle sähköpostisi ja ilmoitamme sinulle, kun tuote on taas tilattavissa.
          </p>
      </div>
        <div class="col-6">     
        <h3 className='kysymys'>Onko kaikki mitä ihminen sanoo ennen "mutta" sanaa valhetta?</h3>
          <p className='vastaus'>
            Kyllä.
          </p>

          <h3 className='kysymys'>Tuotteeni on aina loppu? Miksi?</h3>
          <p className='vastaus'>
            Varastomme ovat ikävä kyllä rajalliset ja osa tuotteistamme on selvästi toivotumpia kuin toiset.
            Halutessasi voit jättää tuotteen kohdalle sähköpostisi ja ilmoitamme sinulle, kun tuote on taas tilattavissa.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
