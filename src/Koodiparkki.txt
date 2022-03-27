import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function App() {

        
  return (
    <nav className='nav'>
      <h3>LOGO</h3>
      <ul className='nav-links'>
        <Link to="/">
          <li>Etusivu</li>
        </Link>
        <Link to="./Pages/kysymykset">
          <li>FAQ</li>
        </Link>
        <li>Kategoriat</li>
      </ul>
    </nav>
    
  );
}

export default App;