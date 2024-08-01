const { Router } = require('express');
const UsuarioController = require("../controllers/UsuarioController.js");

const router = Router();

const usuarioController = new UsuarioController()

router.get('/api/usuarios', (req, res) =>  usuarioController.getAll(req, res));
router.get('/api/usuario/:id', (req, res) =>  usuarioController.getById(req, res));
router.post('/api/newUsuario', (req, res) => usuarioController.create(req, res))
router.put('/api/updateUsuario/:id', (req, res) => usuarioController.update(req, res))

module.exports = router;
