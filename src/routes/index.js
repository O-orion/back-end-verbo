const express = require('express');
const usuarioRouter = require('./usuarioRoutes.js'); // Certifique-se de que o caminho está correto
const authRouter = require('./authRoutes.js')

module.exports = app => {
    app.use(express.json(), 
    usuarioRouter,
    authRouter,
    );
};