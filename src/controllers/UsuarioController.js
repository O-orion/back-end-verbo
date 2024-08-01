const UsuarioService = require('../services/UsuarioService.js');
const Controller = require('./Controller.js');

const usuarioService = new UsuarioService()

class PessoaController extends Controller {

    constructor() {
        super(usuarioService)
    }

}

module.exports = PessoaController;