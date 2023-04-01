import React from 'react'
import NavBar from '../NavBar/NavBar'
import imagen from '../../img/videogame.png'
import './about.css'


function About() {
    return (
        <>
        <NavBar />
        <div className="container-about">
            <h1>Individual Project</h1>
            <h1>Maximiliano Piolatto</h1>
            <div className="div-foto">
            <img src={imagen} alt="foto"></img>
            </div>
        </div>
        </>
    )
}

export default About

