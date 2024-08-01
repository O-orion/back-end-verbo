const { Router } = require('express');
const UsuarioController = require("../controllers/UsuarioController.js");

const router = Router();

const usuarioController = new UsuarioController()

router.get('/api/usuarios', (req, res) =>  usuarioController.getAll(req, res));

router.post('/api/newUsuario', (req, res) => usuarioController.createNew(req, res))

module.exports = router;
