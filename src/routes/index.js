import { Router } from 'express';
import usuarioRouter from './usuarioRoutes.js'; // Certifique-se de que o caminho está correto

const router =  Router();

router.use('/usuario', usuarioRouter)

export default router;