const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secretKey = process.env.JWT_SECRET;


function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
        username: user.username
    }

    return jwt.sign(payload, secretKey, { expiresIn: '24h' })
}

function verifyToken(token) {
    try {
        return jwt.verify(token, secretKey)
    } catch (error) {
        throw new Error("Token Inválido ou token expirado!")
    }
}

module.exports = {
    generateToken,
    verifyToken
}