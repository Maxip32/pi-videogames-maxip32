import { Link } from 'react-router-dom';
import './landing.css'

export default function Landing() {

  return (
    <div className="Imagebtn">
        <img className="theImage" src="" alt="" />
        <Link to="/videogames">
          <button className="myBtninicio">START GAME</button>
        </Link>
    </div>
  );
}