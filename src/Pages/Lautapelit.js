import '../App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../Lautapelit.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link, useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';


export default function Products({url}) {
  
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  let params = useParams();

  useEffect(() => {
    console.log(url + 'products/getproducts.php/' + params.tuoteryhmanro);
      axios.get(url + 'products/getproducts.php/' + params.tuoteryhmanro)
        .then((response) => {
          const json = response.data;
          //console.log(json);
          setCategoryName(json);
          setProducts(json);
      }).catch (error => {
        alert(error.response === undefined ?  error : error.response.data.error);
      })
  }, [params])
  

  return (

    <div className="App">
      <div>
      {products.map(tuote => (
        <div key={tuote.tuotenro}>
          {tuote.tuotenimi}
        </div>
      ))}
    </div>


      <div className="row">
      <div className="col-7">

      <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="../Kuvat/lautapeli_1_monopoly.jpg" className="lautapeli1" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Monopoly</h5>
        <p className="card-text">Klassikkojen klassikko! Tätä et ikinä kyllästy pelaamaan.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="../Kuvat/lautapeli_2_kimble.jpg" className="lautapeli2" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Kimble</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="../Kuvat/lautapeli_3_muuttuva_labyrintti.jpg" className="lautapeli3" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Muuttuva Labyrintti</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="../Kuvat/lautapeli_4_el_dorado.jpg" className="lautapeli4" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">El Dorado</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
      
    </div>
  </div>  
  </div>
  );
  
}