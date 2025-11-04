// routes/courses.js
const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');
const db = require('../models');

const router = express.Router();

// POST /api/courses - Admin o instructor pueden crear cursos
router.post('/', authenticate, authorize('admin', 'instructor'), async (req, res) => {
  try {
    const { title, description, slug, price, duration, level, requirements, learningObjectives } = req.body;

    // Validaciones básicas (Slug . formato URL para representar el recurso)
    if (!title || !slug) {
      return res.status(400).json({ 
        error: 'Título y slug son requeridos' 
      });
    }

    // Verificar si el slug ya existe
    const existingCourse = await db.Course.findOne({ where: { slug } });
    if (existingCourse) {
      return res.status(400).json({ 
        error: 'El slug ya está en uso. Usa un slug único.' 
      });
    }

    // Crear curso
    const course = await db.Course.create({
      title,
      description,
      slug,
      price: price || 0.00,
      duration: duration || 0,
      level: level || 'beginner',
      requirements,
      learningObjectives,
      instructorId: req.user.id // El instructor que crea el curso
    });

    // Incluir información del instructor en la respuesta
    const courseWithInstructor = await db.Course.findByPk(course.id, {
      include: {
        model: db.User,
        as: 'instructor',
        attributes: ['id', 'name', 'email', 'avatar']
      }
    });

    res.status(201).json({
      message: 'Curso creado exitosamente',
      course: courseWithInstructor
    });

  } catch (error) {
    console.error('Error creando curso:', error);
    res.status(400).json({ 
      error: 'Error al crear curso',
      details: error.message 
    });
  }
});

// GET /api/courses - Fetch a todos los cursos disponibles para el estudiate
router.get('/', async (req, res) => {
  try {
    const courses = await db.Course.findAll({
      where: { status: 'published' }, // Solo cursos publicados
      include: [
        {
          model: db.User,
          as: 'instructor',
          attributes: ['id', 'name', 'avatar']
        },
        {
          model: db.User,
          as: 'students',
          attributes: ['id'],
          through: { attributes: [] } // No incluir datos de la tabla Enrollment
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    // Formatear respuesta para incluir conteo de estudiantes inscriptos en ese curso
    const coursesWithStats = courses.map(course => ({
      ...course.toJSON(),
      studentsCount: course.students.length,
      students: undefined // No enviar la lista completa de estudiantes
    }));

    res.json(coursesWithStats);

  } catch (error) {
    console.error('Error obteniendo cursos:', error);
    res.status(500).json({ 
      error: 'Error al obtener cursos',
      details: error.message 
    });
  }
});

// GET /api/courses/:id - Fetch detalle del curso especifico
router.get('/:id', async (req, res) => {
  try {
    const course = await db.Course.findByPk(req.params.id, {
      include: [
        {
          model: db.User,
          as: 'instructor',
          attributes: ['id', 'name', 'email', 'avatar', 'bio']
        },
        {
          model: db.User,
          as: 'students',
          attributes: ['id', 'name', 'avatar'],
          through: { attributes: ['enrolledAt', 'progress', 'completed'] }
        }
      ]
    });

    if (!course) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    // Solo mostrar estudiantes si el curso está publicado o el usuario es instructor/admin
    if (course.status !== 'published') {
      course.students = undefined;
    }

    res.json(course);

  } catch (error) {
    console.error('Error obteniendo curso:', error);
    res.status(500).json({ 
      error: 'Error al obtener curso',
      details: error.message 
    });
  }
});

// PUT /api/courses/:id - Actualizaicon de un curso
router.put('/:id', authenticate, async (req, res) => {
  try {
    const course = await db.Course.findByPk(req.params.id);

    if (!course) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    // Verificar permisos: solo instructor del curso o admin puede editar
    if (course.instructorId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ 
        error: 'No tienes permisos para editar este curso' 
      });
    }

    // Si se intenta cambiar el slug, verificar que no exista
    if (req.body.slug && req.body.slug !== course.slug) {
      const existingSlug = await db.Course.findOne({ 
        where: { slug: req.body.slug } 
      });
      if (existingSlug) {
        return res.status(400).json({ 
          error: 'El slug ya está en uso' 
        });
      }
    }

    await course.update(req.body);

    const updatedCourse = await db.Course.findByPk(course.id, {
      include: {
        model: db.User,
        as: 'instructor',
        attributes: ['id', 'name', 'avatar']
      }
    });

    res.json({
      message: 'Curso actualizado exitosamente',
      course: updatedCourse
    });

  } catch (error) {
    console.error('Error actualizando curso:', error);
    res.status(400).json({ 
      error: 'Error al actualizar curso',
      details: error.message 
    });
  }
});

// DELETE /api/courses/:id - Eliminacion de un curso
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const course = await db.Course.findByPk(req.params.id);

    if (!course) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    // Verificar permisos: solo instructor del curso o admin puede eliminar
    if (course.instructorId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ 
        error: 'No tienes permisos para eliminar este curso' 
      });
    }

    await course.destroy();

    res.json({ 
      message: 'Curso eliminado exitosamente' 
    });

  } catch (error) {
    console.error('Error eliminando curso:', error);
    res.status(500).json({ 
      error: 'Error al eliminar curso',
      details: error.message 
    });
  }
});

module.exports = router;