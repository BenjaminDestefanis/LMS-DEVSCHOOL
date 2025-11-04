const express = require('express')
const { generateToken } = require('../utils/jwt')
const { authenticate, authorize } = require('../middleware/auth');
const db = require('../models');

const router = express.Router();

// REGISTRO DE USUARIO

// POST - /api/auth/register - Registor de nuevos usuarios (admin, instructor, student)
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role = 'student' } = req.body;

        // Validar campos requeridos
        if (!name || !email || !password) {
        return res.status(400).json({ 
            error: 'Nombre, email y contraseña son requeridos' 
        });
        }

        // Validar rol permitido
        const allowedRoles = ['student', 'instructor', 'admin'];
        if (!allowedRoles.includes(role)) {
        return res.status(400).json({ 
            error: 'Rol no válido. Roles permitidos: student, instructor, admin' 
        });
        }

        // Verificar si el usuario ya existe
        const existingUser = await db.User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }

        // Validar fortaleza de contraseña (opcional pero recomendado)
        if (password.length < 6) {
        return res.status(400).json({ 
            error: 'La contraseña debe tener al menos 6 caracteres' 
        });
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
            message: `Usuario ${role} registrado exitosamente`,
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
                isActive: user.isActive
            }
        });

        
    } catch (error) {
        console.error('Error en registro de usuario:', error)
        res.status(400).json({error: 'Error al registrar usuario', details: error.message})
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