import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <div className="App">
      <div class="row">
    <div class="col-8"><Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="..//Kuvat/IMG_20180719_214837.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="../Kuvat/IMG_20180719_214826.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="../Kuvat/IMG_20180719_214850.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></div>
    <div class="col-4">djfghfgkjgjlfdljfsjlfsjlfsljjlsljsjlljjlgsrgjl</div>
  </div>
  </div>
  );
}

export default App;
