require('dotenv').config();
const { Router } = require('express');
const router = Router();

//Importo todos los routers;
const videogames = require('./videogames');
const videogame = require('./videogame');
const genres = require('./genres');

//Configuro todos los routers
router.use('/videogames', videogames);
router.use('/genres', genres);
router.use('/videogame', videogame);

module.exports = router;