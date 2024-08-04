const AuthService = require('../services/AuthService.js')

const authService = new AuthService();

class AuthController {

    async login(req, res) {
        const dadosLogin = req.body;

        try {
            const token = await authService.login(dadosLogin);

            return res.status(200).json({"Token": token})
        } catch (error) {
            console.log('error: ' + error.message)
            return res.status(400).json({"Error": error.message})
        }
    }
}

module.exports = AuthController;