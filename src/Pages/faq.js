import '../App.css';
import React from 'react';

const URL = '';

function App() {
  
  return (
    <div className="App">

{/*Navbar alkaa tästä*/}

{/*Grid Layout alkaa tästä*/}

      <div className="row">
    <div className="col-7">

{/*Accordion alkaa tästä*/}



{/*Footer alkaa tästä*/}

  <footer className="info">
  <div className="container p-6">
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
    </div>
    </footer>
    </div>
    </div>
  </div>
  );
}

export default App;
