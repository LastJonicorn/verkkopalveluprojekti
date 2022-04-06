import React from 'react';
import '../Lautapelit.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';


const URL = '';

function App() {
  
  return (
    <div className="App">
  
      <div className="row">
      <div className="col-7">

      <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="../Kuvat/lautapeli_1_monopoly.jpg" class="lautapeli1" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Monopoly</h5>
        <p class="card-text">Klassikkojen klassikko! Tätä et ikinä kyllästy pelaamaan.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../Kuvat/lautapeli_2_kimble.jpg" class="lautapeli2" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Kimble</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../Kuvat/lautapeli_3_muuttuva_labyrintti.jpg" class="lautapeli3" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Muuttuva Labyrintti</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../Kuvat/lautapeli_4_el_dorado.jpg" class="lautapeli4" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">El Dorado</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
      
    </div>
  </div>  
  </div>
  );
  
}

export default App;
