const Service =  require("./Service.js");
const bcrypt  = require("bcrypt")

class UsuarioService extends Service {
    constructor () {
        super('User')
    }

    async createUser(dadosDoUsuario) {
        
        let password = dadosDoUsuario.passwordHash;

        if(!password.trim()) {
            throw new Error('A senha deve ter no mínimo 8 caracteres')
        }

        let passwordHash = await this.hashPassword(password);

        dadosDoUsuario.passwordHash = passwordHash;

        return await super.createRegistry(dadosDoUsuario)
    }

    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt)
    }

    async userByEmail(email) {
        const usuario = await this.db['User'].scope('withPassword').findOne({
            where: {
                email: email
            }
        })

        return usuario;
    }
}

module.exports = UsuarioService;