require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT ?? 3000;
const pokedex = require("./data/pokedex.json");

// Routers import
const mainRouter = require('./routers/mainRouter');


// Create server
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

// -----MIDDLEWARES-----
app.use(express.static("public"));

app.use((req, res, next) => {
  res.locals.pokedex = pokedex;
  res.locals.title = "Pokedex";
  next();
});





// Routers
app.use(mainRouter);



// 404
app.use((req, res) => {
  res.statusCode = 404;
  res.send("404page");
});

app.listen(PORT);
