const UsuarioService = require('./UsuarioService.js');
const bcrypt = require('bcrypt')
const { generateToken } = require('../utils/jwt.js')

const usuarioService = new UsuarioService();

class AuthService {

    async login(dadosLogin){
        const { email, password } = dadosLogin;
        const user = await usuarioService.userByEmail(email);

        if(!user) {
            throw new Error("Dados Inválidos!");
        }


        const isPasswordValid = await bcrypt.compare(password, user.dataValues.passwordHash);
        console.log(isPasswordValid)

        if(!isPasswordValid) {
            throw new Error("Dados Inválidos!")
        }

        const token = generateToken(user)
        console.log("token: " + token)
        return token;
    }
}


module.exports = AuthService;