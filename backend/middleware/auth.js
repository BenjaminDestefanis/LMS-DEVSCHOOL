const { verifyToken } = require('../utils/jwt');

const authenticate = (req, res, next) => {
    try {
        // Verificacion si hay y si existe el token
        const token = req.header('Authorization')?.replace('Bearer ', '')

        if (!token){
            return res.status(401).json({error: 'Acceso denegado. Token requerido'})
        }

        // decodificacion de token
        const decoded = verifyToken(token)
        req.user = decoded // {id, email, rol}
        next();
    } catch (error) {
        res.status(401).json({error : 'token invalido'})
    }
}

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)){
            return res.status(403).json({error : 'Acceso denegado. Permisoso insuficientes'})
        }
        next()
    }
}


module.exports = {
    authenticate,
    authorize
}