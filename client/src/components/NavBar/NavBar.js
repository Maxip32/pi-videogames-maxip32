import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbarestilo">
                <NavLink to="/"><button>HOME</button></NavLink>
                <NavLink to="/videogames"><button> VIDEO GAMES </button></NavLink>
                <NavLink to="/crearjuego"><button> CREATE GAME </button></NavLink>
                <NavLink to="/about"><button>ABOUT</button></NavLink>
        </div>
    )
}

export default NavBar;
