import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';




const URL = 'http://localhost/verkkopalveluprojekti-backend/';

function App() {

  const [sahkoposti,setSahkoposti] = useState('');
  const [palaute,setPalaute] = useState('');
  const [etunimi,setEtunimi] = useState('');
  const [sukunimi,setSukunimi] = useState('');
  const [palautteet,setPalautteet] = useState([]);

  

useEffect(() => {
  axios.get(URL + 'feedback/index.php')
  .then((response) => {
  console.log(response.data);
  setPalautteet(response.data);
  }).catch(error =>{
  alert(error.response ? error.response.data.error : error);
  });
}, [])


function save(e){
  e.preventDefault();
  const json = JSON.stringify({etunimi:etunimi,sukunimi:sukunimi,sahkoposti:sahkoposti, palaute:palaute});
  axios.post(URL + 'feedback/add.php',json, {
  headers: {
  'Content-Type' : 'application/json'
  }
  })
  .then((response)=>{
  setPalautteet(palautteet => [...palautteet,response.data]);
  setSahkoposti('');
  setPalaute('');
  setEtunimi('');
  setSukunimi('');
  }).catch(error=>{
  alert(error.response ? error.response.data.error : error);
  })
}


return(
  <div className="container">
    <div class="row justify-content-center">
    <div class="col-4" id='palaute_div'>
    <form onSubmit={save}>
      <h2>Haluatko antaa palautetta?</h2>
    
      

        <label class="form-label" id='palaute_label' >Etunimesi</label>
        <input type="text" class="form-control input-lg" id='palaute_input'  placeholder='Esimerkkinimi' value={etunimi} onChange={e => setEtunimi(e.target.value)}/>

        <label class="form-label " id='palaute_label' >Sukunimesi</label>
        <input type="text" class="form-control input-lg" id='palaute_input'   placeholder='Esimerkkisukunimi' value={sukunimi} onChange={e => setSukunimi(e.target.value)}/>

        <label class="form-label" id='palaute_label' >Sähköposti</label>
        <input type="email" class="form-control input-lg" id='palaute_input'  aria-describedby="emailHelp"  placeholder='esimerkki@weleho.com' value={sahkoposti} onChange={e => setSahkoposti(e.target.value)}/>
  
        <div id="emailHelp" class="form-text">Vastaamme sähköpostitse palautteeseen jos sitä haluat.</div>
      
        <label class="form-label" id='palaute_label' >Palaute</label>
        <input type="text" class="form-control input-lg" id='palaute_input' value={palaute} placeholder='Kerro mitä mieltä olet.' onChange={e => setPalaute(e.target.value)}/>
        
      
      <button type="submit" class="btn btn-primary" id='palaute_button' >Lähetä</button>
    </form>
    </div>
    </div>
    </div>
 
)
}

export default App;