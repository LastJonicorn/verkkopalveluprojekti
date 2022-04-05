import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const URL = '';

function App() {
  
  return (    
    <div>
      <Nav />
      <div class="container">
      <Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Voinko toivoa tiettyä peliä valikoimiinne?</Accordion.Header>
    <Accordion.Body>
    Kyllä. Voit lähettää meille sähköpostia otsikolla "pelitoive" ja toivoa haluamaasi peliä valikoimiimme. <br/>
            Jos saamme tarpeeksi toiveita tietyistä peleistä niin lisäämme ne varmasti valikoimaan tulevaisuudessa.
          
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Tuotteeni on aina loppu? Miksi?</Accordion.Header>
    <Accordion.Body>
    Varastomme ovat ikävä kyllä rajalliset ja osa tuotteistamme on selvästi toivotumpia kuin toiset.
            Halutessasi voit jättää tuotteen kohdalle sähköpostisi ja ilmoitamme sinulle, kun tuote on taas tilattavissa.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Onko tuotteillanne palautusoikeutta?</Accordion.Header>
    <Accordion.Body>
    Kaikilla AVAAMATTOMILLA tuotteillamme on 30 päivän palautusoikeus.
    </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4">
    <Accordion.Header>Onko kaikki mitä ihminen sanoo ennen "mutta" sanaa valhetta?</Accordion.Header>
    <Accordion.Body>
    Kyllä.
    </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="5">
    <Accordion.Header>Sain viallisen tuotteen. Mitä teen?</Accordion.Header>
    <Accordion.Body>
    Ole meihin sähköpostilla yhteydessä. Viallisen tuotteen hyvitämme lähettämällä uuden vastaavan tilalle mahdollisimman pian.
            Pahoittelemme viallisen tuotteen saapumisesta
    </Accordion.Body>
    </Accordion.Item>

</Accordion>
      </div>
    </div>
  );
}

export default App;
