const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || '';

const generateToken = (user) => {
        return jwt.sign({
            id: user.id,        // Id Usuario
            email: user.email,  // Email Usuario
            role: user.role     // Role Usuario
        },
        JWT_SECRET,
        { expireIn: '24h'} // El token expira en 24 hs

    )
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET)
    } catch (error) {
        throw new Error('Token invalido')
    }
}


module.exports = {
    generateToken,
    verifyToken,
    JWT_SECRET
}