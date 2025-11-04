// routes/articles.js
const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');
const db = require('../models');

const router = express.Router();

// GET /api/articles - Todos pueden ver artículos publicados
router.get('/', async (req, res) => {
  try {
    const articles = await db.Article.findAll({
      where: { status: 'published' },
      include: {
        model: db.User,
        as: 'author',
        attributes: ['id', 'name', 'avatar']
      },
      order: [['createdAt', 'DESC']]
    });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/articles/:id - Ver artículo específico
router.get('/:id', async (req, res) => {
  try {
    const article = await db.Article.findByPk(req.params.id, {
      include: {
        model: db.User,
        as: 'author',
        attributes: ['id', 'name', 'avatar']
      }
    });
    
    if (!article) {
      return res.status(404).json({ error: 'Artículo no encontrado' });
    }
    
    // Incrementar contador de vistas
    await article.increment('viewCount');
    
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/articles - Solo instructores y admin pueden crear
router.post('/', authenticate, authorize('instructor', 'admin'), async (req, res) => {
  try {
    const article = await db.Article.create({
      ...req.body,
      authorId: req.user.id
    });
    
    const articleWithAuthor = await db.Article.findByPk(article.id, {
      include: {
        model: db.User,
        as: 'author',
        attributes: ['id', 'name', 'avatar']
      }
    });
    
    res.status(201).json(articleWithAuthor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT /api/articles/:id - Solo autor o admin puede actualizar
router.put('/:id', authenticate, async (req, res) => {
  try {
    const article = await db.Article.findByPk(req.params.id);
    
    if (!article) {
      return res.status(404).json({ error: 'Artículo no encontrado' });
    }
    
    // Verificar permisos: autor o admin
    if (article.authorId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'No tienes permisos para editar este artículo' });
    }
    
    await article.update(req.body);
    res.json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/articles/:id - Solo autor o admin puede eliminar
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const article = await db.Article.findByPk(req.params.id);
    
    if (!article) {
      return res.status(404).json({ error: 'Artículo no encontrado' });
    }
    
    // Verificar permisos: autor o admin
    if (article.authorId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'No tienes permisos para eliminar este artículo' });
    }
    
    await article.destroy();
    res.json({ message: 'Artículo eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;