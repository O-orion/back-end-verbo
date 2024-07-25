import { Router } from 'express';

const router = Router();

router.get('/usuarios', (req, res) => {
    res.send('Olá');
});

export default router;
