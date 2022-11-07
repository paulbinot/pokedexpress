const express = require('express');
const mainController = require('../controllers/mainController');

//Router creation
const mainRouter = express.Router();

// Routes
mainRouter.get('/', mainController.renderHomePage);
mainRouter.get('/pokemons/:pokemonId', mainController.renderPokemonPage);

module.exports = mainRouter;
