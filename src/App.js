import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Pages/Nav';
import Etusivu from './Pages/Etusivu';
import faq from './Pages/faq';

const URL = '';

function App() {
  
  return (
    <div className="App">
      <h1>Lautapelikauppa Weleho</h1>

{/*Navbar alkaa tästä*/}
<Router>
  <Nav />
  <Routes>
    <Route path="/" element={Etusivu}/>
    <Route path="/faq" element={faq}/>
  </Routes>
</Router>

{/*Grid Layout alkaa tästä*/}

<Etusivu />
  </div>
  );
}

export default App;
