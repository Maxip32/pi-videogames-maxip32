require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Genre } = require('../db');

//TODO -----> GET a "/genres" <--------

router.get('/', async (req, res) => {
    try {
        // si ya los tengo cargados en la DB los consumo desde alli.
        const genresDb = await Genre.findAll();
        if (genresDb.length) return res.json(genresDb)
        
        //else --> los voy a buscar a la API
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const genres = response.data.results; // recibo un array de objetos, con los juego filtrados por GENERO
        //los guardo en la DB filtrando solo el nombre
        genres.forEach(async g => {
            await Genre.findOrCreate({
                where: {
                    name: g.name
                }
            })
        })
        //(OPTIMIZADO) --> SOLO ENVIO AL FRONT LA INFO NECESARIA (nombre de los generos)
        const genresREADY = genres.map(game => {
            return{
                id: game.id,
                name: game.name
            }
        });
        res.json(genresREADY)
    } catch (err) {
        return console.log(err)
    }
})

module.exports = router;
