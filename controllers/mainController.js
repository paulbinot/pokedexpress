// Require data here if needed
const pokedex = require("../data/pokedex.json");


const mainController = {
  renderHomePage: (req, res) => {
    res.render("index");
  },
  renderPokemonPage: (req, res) => {
    const pokemonData = pokedex.find(pokemon => pokemon.id.toString() === req.params.pokemonId.toString());
    console.log(pokemonData);
    res.render("pokemon", {pokemonData});
  }
};

module.exports = mainController;
