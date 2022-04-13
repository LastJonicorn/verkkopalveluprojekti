import '../App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../Lautapelit.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link, useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';


export default function Products({url, addToCart}) {
  
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  let params = useParams();

  useEffect(() => {
    console.log(url + 'products/getproducts.php/' + params.tuoteryhmanro);
      axios.get(url + 'products/getproducts.php/' + params.tuoteryhmanro)
        .then((response) => {
          const json = response.data;
          console.log(json);
          setCategoryName(json.tuoteryhma);
          setProducts(json.tuote);
      }).catch (error => {
        alert(error.response === undefined ?  error : error.response.data.error);
      })
  }, [params])
  

  return (

    <div className='container'>
    <div className="row">
      <div className="col-8">        
      <h2>{categoryName}</h2>
      {products.map(tuote => (
        <div className= 'container-tuote'>
        <div key={tuote.tuotenro}>
          <h3>{tuote.tuotenimi}</h3>
          <div>
            <img className='tuotekuva' src={url + '/images/' + tuote.kuva} alt='Loading'/>
          </div>
          <button className='btn btn-primary' type='button' onClick={()=>addToCart(tuote)}>Lisää</button>
        </div>
        </div>
      ))}
    </div>
    </div>
    </div>

  );
  
}