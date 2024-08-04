const { Router } = require('express');
const AuthController = require('../controllers/AuthController.js');

const router = Router()
const authController = new AuthController();

router.post('/api/auth/login',(req, res) => authController.login(req, res))


module.exports = router;
