import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbarestilo">
                <NavLink to="/"><button>Home</button></NavLink>
                <NavLink to="/videogames"><button>Videogames</button></NavLink>
                <NavLink to="/crearjuego"><button>Create-Game</button></NavLink>
                <NavLink to="/about"><button>About</button></NavLink>
        </div>
    )
}

export default NavBar;
