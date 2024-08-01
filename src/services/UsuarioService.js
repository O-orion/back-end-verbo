const Service =  require("./Service.js");

class UsuarioService extends Service {
    constructor () {
        super('User')
    }
}

module.exports = UsuarioService;