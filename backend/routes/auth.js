const express = require('express')
const { generateToken } = require('../utils/jwt')
const { authenticate, authorize } = require('../middleware/auth');
const db = require('../models');

const router = express.Router();

// REGISTRO DE USUARIO
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role = 'student' } = req.body;

        // Verificar si el usuario ya existe
        const existingUser = await db.User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }

        // Crear usuario (la contraseña se hashea automáticamente)
        const user = await db.User.create({
            name,
            email,
            password, // ← Se hashea en el modelo
            role
        });

        // Generar token
        const token = generateToken(user);

        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// LOGIN DE USUARIO
router.post('/login', async(req, res) => {
    try {
        const { email, password} = req.body

        // Busqueda del usuario
        const user = await db.findOne({where : { email }})
        if (!user) {
            return res.status(401).json({ error : 'Credenciales invalidas'})
        }

        // Verificacion de la contraseña
        // funcion validPassword() se encuentra en el prototipo de cada usuario. (la fn se encuentra al final del )
        const isValidPassword = user.validPassword(password)
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Credenciales inválidas'})
        }

        // Generar token

        const token = generateToken(user)
        res.json({
            message: 'Login exitoso',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
})

// RUTA PROTEGIDA - EJEMPLO

router.get('/profile', authenticate, (req, res) => {
    res.json({
        message: 'Perfil del usuario',
        user: req.user,
    })
})

// RUTA SOLO PARA ADMIN - EJEMPLO
router.get('/admin', authenticate, authorize('admin'), (req, res) => {
  res.json({ message: 'Bienvenido admin' });
});

module.exports = router;