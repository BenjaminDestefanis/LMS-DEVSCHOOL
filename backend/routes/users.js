const express = require('express')
const { authenticate, authorize } = require('../middleware/auth')
const { json } = require('sequelize')
const db = require('../models')

const router = express.Router()

// GET /api/users -- Solo admin puede ver todos los usuarios
router.get('/', authenticate, authorize('admin'), async (req, res) => {
    try {
        const user = await db.User.findByPk(req.user.id, {
            attributes: { exclude: ['password']} // hace consulta, y excluye password
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// GET /api/users/profiel -- Usuario ve su perfil
router.get('/profile', authenticate, async (req, res) => {
    try {
        const user = await db.User.findByPk(req.user.id, {
            attributes: { exclude: ['password'] }
        })
        res-json(user)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
})

// PUT /api/users/profile - Actualizacion de perfil propio
router.put('/profile', authenticate, async (req, res) => {
    try {
        const { name, avatar } = req.body
        const user = await db.User.findByPk(req.user.id)
        await user.update({ name, avatar })
        
        res-json({
            message: 'Perfil actualizado',
            user : {
                id: id.user,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                role: user.role
            }
        })
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
})

// DELETE /api/users/:id - Solo admin puede eliminar usuarios
router.delete('/:id', authenticate, authorize('admin'), async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    await user.destroy();
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;