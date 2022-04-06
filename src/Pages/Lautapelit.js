import React from 'react';
import '../Lautapelit.css';
import 'bootstrap/dist/css/bootstrap.css';

const URL = '';

function App() {
  
  return (
    <div className="App">
  
      <div className="row">
      <div className="col-7">

      <div className="col" id="ale">
    <ul class="nav flex-column" id="ale" > 
          <li class="nav-item" id="aletuote">
            <a class="nav-link" href="#">aletuote</a>
            <img src="..\Kuvat\i25369691w800h465.jpg" id="alekuva"/>
          </li>
          <li class="nav-item"  id="aletuote">
            <a class="nav-link" href="#">aletuote</a>
            <img src="../Kuvat/1782_1200x1200.jpg" id="alekuva"/>
          </li>
          <li class="nav-item"  id="aletuote">
            <a class="nav-link" href="#">aletuote</a>
            <img src="../Kuvat/4015566033481xxl.jpg" id="alekuva"/>
          </li>
    </ul>
    </div>

    </div>
    </div>
  </div>
  );
  
}

export default App;
