import {React, useState} from 'react'
import NavBar from '../NavBar/NavBar'
import axios from 'axios'
import './CrearJuego.css'

function CrearJuego(props) {

    const [errors, setErrors] = useState({ form: 'Must complete the form' });

    const [form, setForm] = useState({
        name: '',
        description: '',
        releaseDate: '',
        rating: 0,
        genres: [],
        platforms: []
    });

    const handleChange = e => {
        if (e.target.parentNode.parentNode.id === 'genres') {
            if (e.target.checked) {
                setForm(prevState => ({
                    ...prevState,
                    genres: form.genres.concat(e.target.value)
                }))
            } else {
                setForm(prevState => ({
                    ...prevState,
                    genres: form.genres.filter(x => e.target.value !== x)
                }))
            }
        }
        if (e.target.parentNode.parentNode.id === 'platforms') {
            if (e.target.checked) {
                setForm(prevState => ({
                    ...prevState,
                    platforms: form.platforms.concat(e.target.name)
                }))
            } else {
                setForm(prevState => ({
                    ...prevState,
                    platforms: form.platforms.filter(x => e.target.name !== x)
                }))
            }
        }
        if (e.target.type !== 'checkbox') {
            setForm(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
        }))
    }
    const validate = form => {
        let errors = {};
        if (!form.name) {
            errors.name = 'Game Name is required';
        } else if (form.name.length < 4) {
            errors.name = 'Game Name must have at least 4 characters';
        }
        if (!form.description) {
            errors.description = 'Description is required';
        } else if (form.description.length < 8) {
            errors.description = 'Description must have at least 8 characters'
        }
        if (!form.rating) {
            errors.rating = 'Rating is required';
        } else if (!/^[1-5]$/.test(form.rating)) {
            errors.rating = 'Rating must be between 1 and 5';
        }
        return errors;
    }

    const handleSubmit = e => {
        e.preventDefault()
        validate(form);
        let checkboxsErrors = []
        if (form.genres.length < 1) checkboxsErrors.push('Genres is required');
        if (form.platforms.length < 1) checkboxsErrors.push('Platforms is required');
        if (Object.values(errors).length || checkboxsErrors.length) { // Object.values --> retorno un array con los values
            return alert(Object.values(errors).concat(checkboxsErrors).join('\n'));
        }
        axios.post('http://localhost:3001/videogame', form)
                  .then(res => console.log(res.data));
        alert(`${form.name} Creado Correctamente`)
        props.history.push('/videogames') 
    }

    return (
        <>
        <NavBar />
        <div className="main-add">
            <div className="container-add">
                <h2>CREATE GAME - DETAILS -</h2>
                <div className="div-cont">
                    <form onSubmit={handleSubmit} onChange={handleChange}>
                        <label htmlFor='name' className="title-name"><strong>Name: </strong></label>
                        <br />
                        <input className="name" placeholder='Name' type="text" id='name' name='name' autoComplete="off"/>
                        <br />
                        <label htmlFor="description" className="title-name"><strong>Description: </strong></label>
                        <br />
                        <textarea className="name" name='description' placeholder='Description...' id="description" cols="30" rows="3" />
                        <br />
                        <label htmlFor="date" className="title-name"><strong>Release Date: </strong></label>
                        <br />
                        <input name='releaseDate' className="dt" type="date" id="date" required />
                        <br />
                        <label htmlFor="rating" className="title-name"><strong>Rating: </strong></label>
                        <br />
                        <input name='rating' className="dt" placeholder='Rate from 1 to 5' type="tel" id="rating" maxLength='1' autoComplete="off"/>
                        <br />
                        <label className="title-name"><strong>Genres:</strong></label>
                        <div id='genres' className="genres-div">
                            <div className="Action">
                                <input name='Action' value='2' type="checkbox" id="Action" />
                                <label htmlFor="Action">Action.</label>
                            </div>
                            <div className="indie">
                                <input name='Indie' value='1' type="checkbox" id="Indie" />
                                <label htmlFor="Indie">Indie.</label>
                            </div>
                            <div className="Adventure">
                                <input name='Adventure' value='3' type="checkbox" id="Adventure" />
                                <label htmlFor="Adventure">Adventure.</label>
                            </div>
                            <div>
                                <input name='RPG' value='4' type="checkbox" id="RPG" />
                                <label htmlFor="RPG">RPG.</label>
                            </div>
                            <div>
                                <input name='Strategy' value='5' type="checkbox" id="Strategy" />
                                <label htmlFor="Strategy">Strategy.</label>
                            </div>
                            <div>
                                <input name='Shooter' value='6' type="checkbox" id="Shooter" />
                                <label htmlFor="Shooter">Shooter.</label>
                            </div>
                            <div>
                                <input name='Casual' value='7' type="checkbox" id="Casual" />
                                <label htmlFor="Casual">Casual.</label>
                            </div>
                            <div>
                                <input name='Simulation' value='8' type="checkbox" id="Simulation" />
                                <label htmlFor="Simulation">Simulation.</label>
                            </div>
                            <div>
                                <input name='Puzzle' value='9' type="checkbox" id="Puzzle" />
                                <label htmlFor="Puzzle">Puzzle.</label>
                            </div>
                            <div>
                                <input name='Arcade' value='10' type="checkbox" id="Arcade" />
                                <label htmlFor="Arcade">Arcade.</label>
                            </div>
                            <div>
                                <input name='Platformer' value='11' type="checkbox" id="Platformer" />
                                <label htmlFor="Platformer">Platformer.</label>
                            </div>
                            <div>
                                <input name='Racing' value='12' type="checkbox" id="Racing" />
                                <label htmlFor="Racing">Racing.</label>
                            </div>
                            <div>
                                <input name='Massively-Multiplayer' value='13' type="checkbox" id="Massively-Multiplayer" />
                                <label htmlFor="Massively-Multiplayer">Massively-Multiplayer.</label>
                            </div>
                            <div>
                                <input name='Sports' value='14' type="checkbox" id="Sports" />
                                <label htmlFor="Sports">Sports.</label>
                            </div>
                            <div>
                                <input name='Fighting' value='15' type="checkbox" id="Fighting" />
                                <label htmlFor="Fighting">Fighting.</label>
                            </div>
                        </div>
                        <label className="title-name"><strong>Platforms: </strong> </label>
                        <div id='platforms' className="plat-div">
                            <div>
                                <input name='PC' type="checkbox" id="PC" />
                                <label htmlFor="PC">PC.</label>
                            </div>
                            <div>
                                <input name='iOS' type="checkbox" id="iOS" />
                                <label htmlFor="iOS">iOS.</label>
                            </div>
                            <div>
                                <input name='Android' type="checkbox" id="Android" />
                                <label htmlFor="Android">Android.</label>
                            </div>
                            <div>
                                <input name='macOS' type="checkbox" id="macOS" />
                                <label htmlFor="macOS">macOS.</label>
                            </div>
                            <div>
                                <input name='PlayStation 4' type="checkbox" id="PlayStation 4" />
                                <label htmlFor="PlayStation 4">PlayStation 4.</label>
                            </div>
                            <div>
                                <input name='PlayStation 5' type="checkbox" id="PlayStation 5" />
                                <label htmlFor="PlayStation 5">PlayStation 5.</label>
                            </div>
                            <div>
                                <input name='XBOX' type="checkbox" id="XBOX" />
                                <label htmlFor="XBOX">XBOX.</label>
                            </div>
                            <div>
                                <input name='PS Vita' type="checkbox" id="PS Vita" />
                                <label htmlFor="PS Vita">PS Vita.</label>
                            </div>
                        </div>
                        <br />
                        <div className="div-but-form">
                        <button type='submit'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}


export default CrearJuego
