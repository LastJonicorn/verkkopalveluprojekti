import React,{useState,useEffect} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';



const url = 'http://localhost/verkkopalveluprojekti-backend/';

export default function Etusivu() {
  
  const [categories, setCategories] = useState([]);
  const [product1, setProduct1] = useState(null);
  const [product2, setProduct2] = useState(null);
  const [product3, setProduct3] = useState(null);
  const [categoryName, setCategoryName] = useState('');

  let params = useParams();

  useEffect(() => {
    console.log(url + 'products/getproducts.php/' + 1);
      axios.get(url + 'products/getproducts.php/' + 1)
        .then((response) => {
          const json = response.data;
          console.log(json);
          setCategoryName(json.tuoteryhma);
          setProduct1(json.tuote[0]);
      }).catch (error => {
        alert(error.response === undefined ?  error : error.response.data.error);
      })
  }, [params])

  useEffect(() => {
    console.log(url + 'products/getproducts.php/' + 1);
      axios.get(url + 'products/getproducts.php/' + 1)
        .then((response) => {
          const json = response.data;
          console.log(json);
          setCategoryName(json.tuoteryhma);
          setProduct2(json.tuote[1]);
      }).catch (error => {
        alert(error.response === undefined ?  error : error.response.data.error);
      })
  }, [params])

  useEffect(() => {
    console.log(url + 'products/getproducts.php/' + 1);
      axios.get(url + 'products/getproducts.php/' + 1)
        .then((response) => {
          const json = response.data;
          console.log(json);
          setCategoryName(json.tuoteryhma);
          setProduct3(json.tuote[2]);
      }).catch (error => {
        alert(error.response === undefined ?  error : error.response.data.error);
      })
  }, [params])

    useEffect(() => {
      console.log(url);
        axios.get(url + '/products/getcategories.php')
          .then((response) => {
            const json = response.data;
            setCategories(json);
            //console.log(json);
        }).catch (error => {
          alert(error.response === undefined ?  error : error.response.data.error);
        })
    }, [])

  return (
    <div className="App">

{/*Navbar alkaa tästä*/}

{/*Grid Layout alkaa tästä*/}
  <div className='container' id='grid_left'>
    <div className="row">
      <div className="col-2">
        
        {/* SIDEBAR */}
        {categories.map(tuoteryhma => (
                <div id='sivukategoria' key={tuoteryhma.tuoteryhmanro}>
                  {<Link
                    to={'/products/' + tuoteryhma.tuoteryhmanro}>{tuoteryhma.tuoteryhmanimi}</Link>}
                </div>
              ))}
    </div>


{/*Carousel alkaa tästä*/}
    <div className='col-6' id='carousel'>
      <Carousel variant="dark">
      <Carousel.Item>

    {/*   {products.map(tuote => (
        <div className= 'container-Car'>
        <div key={tuote.tuotenro}>
          <div>
            <img className='tuotekuvaCar' src={url + '/images/' + tuote.kuva} alt='Loading'/>
          </div>
        </div>
        </div>
      ))} */}

<div className= 'container-Car'>
        <div key={product1?.tuotenro}>
          <div>
            <img className='tuotekuvaCar' src={url + '/images/' + product1?.kuva} alt='Loading'/>
          </div>
        </div>
        </div>      
        <Carousel.Caption>
        <div class='peliteksti' key={product1?.tuotenro}>
            <h5 className="pelinimi">{product1?.tuotenimi}</h5>
            <p className="kuvaus">{product1?.tietoa}</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div key={product2?.tuotenro}>
          <div>
            <img className='tuotekuvaCar' src={url + '/images/' + product2?.kuva} alt='Loading'/>
          </div>
        </div>
        <Carousel.Caption>
        <div class='peliteksti' key={product2?.tuotenro}>
            <h5 className="pelinimi">{product2?.tuotenimi}</h5>
            <p className="kuvaus">{product2?.tietoa}</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div key={product3?.tuotenro}>
          <div>
            <img className='tuotekuvaCar' src={url + '/images/' + product3?.kuva} alt='Loading'/>
          </div>
        </div>
        <Carousel.Caption>
        <div class='peliteksti' key={product3?.tuotenro}>
            <h5 className="pelinimi">{product3?.tuotenimi}</h5>
            <p className="kuvaus">{product3?.tietoa}</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>

<br/><br/>

    <div className="col">
    <ul className="nav flex-column" id="ale" > 
          <li className="nav-item" id="aletuote">
            <h4 id='aleteksti'>aletuote</h4>
            <img id='alekuva' src={url + '/images/' + product3?.kuva} alt='Loading'/>
            <p id='alehinta'>{product3?.hinta}€</p>
            <p id='uusihinta'>17€</p>
          </li>
          <li className="nav-item"  id="aletuote">
          <h4 id='aleteksti'>aletuote</h4>
            <img id='alekuva' src={url + '/images/' + product1?.kuva} alt='Loading'/>
            <p id='alehinta'>{product1?.hinta}€</p>
            <p id='uusihinta'>30€</p>
          </li>
    </ul>
    </div>

</div>


{/*Grid Layout alapuoli alkaa tästä*/}
<div className="container">
  <div className="row">
    <a className="col" id='feedback' href='/Palaute'>
      <div className="" id=''> PALAUTE</div>
    </a>
    <a className="col" id="kysymykset"  href='/kysymykset'>
      <div className="" id="">  FAQ </div>
    </a>
      <a className="col"  id="uutiset" href="/Uutiset">UUTISET</a>
  </div>
</div>

</div>
</div>
  
  );
}