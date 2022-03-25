import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Pages/Nav';
import Etusivu from './Pages/Etusivu';
import faq from './Pages/kysymykset';

const URL = '';

function App() {
  
  return (
    <div className="App" >
     <div className='kauppaid'>
      <h2 >LAUTAPELIKAUPPA</h2>
      <h1>WELEHO</h1>
      </div>

{/*Navbar alkaa tästä*/}
<Router>
  <Nav />
  <Routes>
    <Route path="/" element={Etusivu}/>
    <Route path="/kysymykset" element={faq}/>
  </Routes>
</Router>

{/*Grid Layout alkaa tästä*/}

<Etusivu />
  </div>
  );
}

export default App;
