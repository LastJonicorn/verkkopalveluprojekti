import React from 'react';
import '../App.css';
import '../Uutiset.css';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion';

function App() {
  return (    
    <Accordion className='accordion'>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Vapputarjoukset</Accordion.Header>
    <Accordion.Body>
      Kaikki nopat ja miniatyyrit -15% 28.4. - 2.5. välisen ajan!
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Pääsiäistarjoukset</Accordion.Header>
    <Accordion.Body>
      Kaikki kortti- ja strategiapelit -20% 8. - 17.4. välisen ajan!
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Olemme lisänneet valikoimaamme lautapelejä: katso lista!</Accordion.Header>
    <Accordion.Body>
      <li>Senet</li>
      <li>Diceball!</li>
      <li>The Game of Life</li>
      <li>Risk</li>
      <li>Settlers of Catan</li>
      <li>Marvel United</li>
      <li>Oceans</li>
      <li>Rallyman GT</li>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

  );
}

export default App;