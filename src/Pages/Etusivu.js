import React,{useState,useEffect} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import {Link} from 'react-router-dom';


const url = 'http://localhost/verkkopalveluprojekti-backend/';

export default function Etusivu() {
  
  const [categories, setCategories] = useState([]);


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
  <div className='container'>
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
        <img
          className="d-block w-10"
          src="../Kuvat\carcassonne-the-princess-the-dragon-nordic-2925iA9D2C7A24C5CBDD72EA339CC093B9330A8EBE9A7.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="pelinimi">Tässä peli nro 1</h5>
          <p className="kuvaus">Vau mikä peli. Haluaisit varmasti ostaa tämän!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src="../Kuvat\pic332870.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="peliteksti">
            <h5 className="pelinimi">Tässä peli nro 2</h5>
            <p className="kuvaus">Vau mikä peli. Haluaisit varmasti ostaa tämän!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="../Kuvat\pic3518231.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="pelinimi">Tässä peli nro 3</h5>
          <p className="kuvaus">Vau mikä peli. Haluaisit varmasti ostaa tämän!</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>

<br/><br/>

    <div className="col" id="ale">
    <ul className="nav flex-column" id="ale" > 
          <li className="nav-item" id="aletuote">
            <a className="nav-link" href="#">aletuote</a>
            <img src="..\Kuvat\i25369691w800h465.jpg" id="alekuva"/>
          </li>
          <li className="nav-item"  id="aletuote">
            <a className="nav-link" href="#">aletuote</a>
            <img src="../Kuvat/1782_1200x1200.jpg" id="alekuva"/>
          </li>
          <li className="nav-item"  id="aletuote">
            <a className="nav-link" href="#">aletuote</a>
            <img src="../Kuvat/4015566033481xxl.jpg" id="alekuva"/>
          </li>
    </ul>
    </div>

</div>


{/*Grid Layout alapuoli alkaa tästä*/}
<div className="container">
  <div className="row">
    <a className="col" id='feedback' href=''>
      <div className="" id=''> PALAUTE</div>
    </a>
      <div className="col" id="suosittelut"> SUOSITTELUT </div>
      <a className="col"  id="uutiset" href="/Uutiset">UUTISET</a>
  </div>
</div>

</div>
</div>
  
  );
}