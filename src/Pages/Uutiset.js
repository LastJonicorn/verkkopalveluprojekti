import React from 'react';
import '../App.css';
import '../Uutiset.css';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion';

function App() {
  return (    
    <Accordion className='accordion'>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Pääsiäistarjoukset!</Accordion.Header>
    <Accordion.Body>
      Kaikki kortti- ja strategiapelit -20% 8. - 17.4. välisen ajan!
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Olemme lisänneet valikoimaamme runsaasti lautapelejä: katso lista!</Accordion.Header>
    <Accordion.Body>
      
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

  );
}

export default App;