const UsuarioService = require('../services/UsuarioService.js');
const Controller = require('./Controller.js');

const usuarioService = new UsuarioService()

class PessoaController extends Controller {

    constructor() {
        super(usuarioService)
    }

    async createUser(req, res) {
        console.log('eae')
        const dadosParaCriacao = req.body;

        try {
            
            const newUser = await usuarioService.createUser(dadosParaCriacao);
            return res.status(200).json(newUser)
        } catch (error) {
            
            return res.status(400).json({"error":  error.message})
        }
    }
}

module.exports = PessoaController;