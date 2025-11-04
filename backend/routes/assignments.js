// routes/assignments.js
const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');
const db = require('../models');

const router = express.Router();

// POST /api/courses/:courseId/assignments - Agregar asignacion a un curso
router.post('/courses/:courseId/assignments', authenticate, authorize('instructor', 'admin'), async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, description, instructions, dueDate, maxPoints, assignmentType, attachments } = req.body;

    // Validar que el curso existe
    const course = await db.Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    // Validar que el instructor es el creador del curso (o admin)
    if (course.instructorId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ 
        error: 'No tienes permisos para agregar tareas a este curso' 
      });
    }

    // Validaciones básicas
    if (!title || !instructions || !dueDate) {
      return res.status(400).json({ 
        error: 'Título, instrucciones y fecha de entrega son requeridos' 
      });
    }

    // Creacion de tarea o asignacion
    const assignment = await db.Assignment.create({
      title,
      description,
      instructions,
      dueDate: new Date(dueDate),
      maxPoints: maxPoints || 100,
      assignmentType: assignmentType || 'homework',
      attachments: attachments || [],
      courseId: parseInt(courseId)
    });

    const assignmentWithCourse = await db.Assignment.findByPk(assignment.id, {
      include: {
        model: db.Course,
        as: 'course',
        attributes: ['id', 'title', 'slug']
      }
    });

    res.status(201).json({
      message: 'Tarea creada exitosamente',
      assignment: assignmentWithCourse
    });

  } catch (error) {
    console.error('Error creando tarea:', error);
    res.status(400).json({ 
      error: 'Error al crear tarea',
      details: error.message 
    });
  }
});

// GET /api/courses/:courseId/assignments - Fetch a asignaciones/tareas de el cruso en especifico.
router.get('/courses/:courseId/assignments', authenticate, async (req, res) => {
  try {
    const { courseId } = req.params;

    // Verificar que el curso existe
    const course = await db.Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    // Construir condiciones de consulta
    let whereCondition = { courseId };
    
    // Si es estudiante, solo mostrar tareas publicadas
    if (req.user.role === 'student') {
      whereCondition.isPublished = true;
    }

    const assignments = await db.Assignment.findAll({
      where: whereCondition,
      include: {
        model: db.Course,
        as: 'course',
        attributes: ['id', 'title', 'slug']
      },
      order: [['dueDate', 'ASC']] // Ordenar por fecha de entrega
    });

    res.json(assignments);

  } catch (error) {
    console.error('Error obteniendo tareas:', error);
    res.status(500).json({ 
      error: 'Error al obtener tareas',
      details: error.message 
    });
  }
});

module.exports = router;