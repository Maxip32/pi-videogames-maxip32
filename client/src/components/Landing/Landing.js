import { Link } from 'react-router-dom';
import './landing.css'

export default function Landing() {

  return (
    <div className="bn">
        <img className="bn" src="" alt="" />
        
        <Link to="/videogames">
          <button className="myBtninicio">START GAME</button>
        </Link>
    </div>
  );
}