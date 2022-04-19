import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';




const URL = 'http://localhost/palaute-backend/';

function App() {

    const [sahkoposti,setSahkoposti] = useState('');
    const [palaute,setPalaute] = useState('');
    const [palautteet,setPalautteet] = useState([]);


    useEffect(() => {
        axios.get(URL)
        .then((response) => {
        //console.log(response.data);
          setPalautteet(response.data);
        }).catch(error =>{
          alert(error.response ? error.response.data.error : error);
      });
      }, [])


      function save(e){
        e.preventDefault();
        const json = JSON.stringify({sahkoposti:sahkoposti, palaute:palaute});
        axios.post(URL + 'add.php',json, {
          headers: {
            'Content-Type' : 'application/json'
          }
        })
        .then((response)=>{
          setPalautteet(palautteet => [...palautteet,response.data]);
          setSahkoposti('');
          setPalaute('');
        }).catch(error=>{
          alert(error.response ? error.response.data.error : error);
        })
      }


    return(
        <div className="container p-4">
        <form onSubmit={save}>
        <h2>Haluatko antaa palautetta?</h2>
        <div class="mb-3">
        <label class="form-label">Sähköposti</label>
        <input type="email" class="form-control" aria-describedby="emailHelp" value={sahkoposti} placeholder='esimerkki@weleho.com' onChange={e => setSahkoposti(e.target.value)}/>
        <div id="emailHelp" class="form-text">Vastaamme sähköpostitse palautteeseen jos sitä haluat.</div>
        </div>
        <div class="mb-3">
        <label class="form-label">Palaute</label>
        <input type="text" class="form-control" />
        </div>
        <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" value={palaute} placeholder='Kerro mitä mieltä olet.' onChange={e => setPalaute(e.target.value)}/>
        <label class="form-check-label" >Ruksaa laatikko jos haluat että vastaamme sinulle.</label>
        </div>
        <button type="submit" class="btn btn-primary">Lähetä</button>
        </form>
        </div>
        
    )

    
}

export default App;