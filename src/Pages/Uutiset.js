import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap';



function App() {
  (
    <Button variant="primary">
    Profile <Badge bg="secondary">9</Badge>
    <span className="visually-hidden">unread messages</span>
  </Button>
    );
  }
  
  export default App;