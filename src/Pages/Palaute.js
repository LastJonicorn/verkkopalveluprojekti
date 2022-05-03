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
  const [palautteet,setPalautteet] = useState([]);
  const [kategoria, setKategoriat] = useState([]);
  /* const [selectedCategory, setSelectedCategory] = useState([]); */

  

useEffect(() => {
  axios.get(URL + 'feedback/index.php')
  .then((response) => {
  console.log(response.data);
  setPalautteet(response.data);
  }).catch(error =>{
  alert(error.response ? error.response.data.error : error);
  });
}, [])

//Kategorian haku jos haluaa hakea tietyn tuotteen mistä antaa palautetta
/*   
  useEffect(() => {
  axios.get(URL + 'products/getcategories.php')
  .then((response) => {
  const json = response.data;
  setKategoriat(json);
  }).catch (error => {
  alert(error.response === undefined ?  error : error.response.data.error);
  })
}, []) */

//Tuotteen haku äsköisestä syystä

/* const [products, setProducts] = useState([]);




useEffect(() => {
axios.get(URL + 'products/getproducts.php/' + selectedCategory)
.then((response) => {
const json2 = response.data;
console.log(json2);
setProducts(json2);
}).catch (error => {
alert(error.response === undefined ?  error : error.response.data.error);
})
}, []) */


function save(e){
  e.preventDefault();
  const json = JSON.stringify({sahkoposti:sahkoposti, palaute:palaute,tuoteryhmanimi:kategoria});
  axios.post(URL + 'feedback/add.php',json, {
  headers: {
  'Content-Type' : 'application/json'
  }
  })
  .then((response)=>{
  setPalautteet(palautteet => [...palautteet,response.data]);
  setSahkoposti('');
  setPalaute('');
  
 /*  console.log(selectedCategory); */
  }).catch(error=>{
  alert(error.response ? error.response.data.error : error);
  })
}


return(
  <div className="container p-4">
    <form onSubmit={save}>
        <h2>Haluatko antaa palautetta?</h2>
        <div class="mb-3">
       
{/*<select class="form-select" id="inputGroupSelect01"    onChange={setSelectedCategory} >
<option selected>Choose...</option>
{
kategoria.map(tuoteryhma => {
return(
<option key={tuoteryhma.tuoteryhmanimi}>{tuoteryhma.tuoteryhmanimi}</option>
);
})
}

</select> */}
{/* {  <select class="form-select" id="inputGroupSelect01" >
<option selected>Choose...</option>
{
products.map(tuote => {
return(
<option eventKey={tuote.tuotenimi}>{tuote.tuotenimi}</option>
);
})
}
</select>} */}


        <label class="form-label">Sähköposti</label>
        <input type="email" class="form-control" aria-describedby="emailHelp"  placeholder='esimerkki@weleho.com' value={sahkoposti} onChange={e => setSahkoposti(e.target.value)}/>
        <div id="emailHelp" class="form-text">Vastaamme sähköpostitse palautteeseen jos sitä haluat.</div>
        </div>
        <div class="mb-3">
        <label class="form-label">Palaute</label>
        <input type="text" class="form-control" value={palaute} placeholder='Kerro mitä mieltä olet.' onChange={e => setPalaute(e.target.value)}/>
        </div>
        
        <button type="submit" class="btn btn-primary">Lähetä</button>
</form>
        </div>
        
    )

    
}

export default App;