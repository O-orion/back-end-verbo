const express = require("express");
const  dotenv = require('dotenv');
const routes = require("./routes/index.js");

// Carregando variáveis de ambiente
dotenv.config();

const app = express();

routes(app)

module.exports = app;