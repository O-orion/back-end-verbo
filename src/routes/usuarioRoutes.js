const { Router } = require('express');
const UsuarioController = require("../controllers/UsuarioController.js");

const router = Router();

const usuarioController = new UsuarioController()

router.get('/api/usuarios', (req, res) =>  usuarioController.getAll(req, res));
router.get('/api/usuario/:id', (req, res) =>  usuarioController.getUser(req, res));
router.post('/api/newUsuario', (req, res) => usuarioController.createNew(req, res))
router.post('/api/updateUsuario', (req, res) => usuarioController.updateUser(req, res))

module.exports = router;
