// routes/quizzes.js
const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');
const db = require('../models');

const router = express.Router();

// POST /api/courses/:courseId/quizzes - Add Ejercicios(Basicos) a un curso.
router.post('/courses/:courseId/quizzes', authenticate, authorize('instructor', 'admin'), async (req, res) => {
  try {
    const { courseId } = req.params;
    const { 
      title, 
      description, 
      timeLimit, 
      maxAttempts, 
      passingScore, 
      questions,
      availableFrom,
      availableUntil 
    } = req.body;

    // Validar que el curso existe
    const course = await db.Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    // Validar permisos
    if (course.instructorId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ 
        error: 'No tienes permisos para agregar evaluaciones a este curso' 
      });
    }

    // Validaciones básicas
    if (!title || !questions || !Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ 
        error: 'Título y al menos una pregunta son requeridos' 
      });
    }

    // Validar estructura de preguntas
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      if (!question.questionText || !question.correctAnswer) {
        return res.status(400).json({ 
          error: `La pregunta ${i + 1} debe tener texto y respuesta correcta` 
        });
      }
    }

    // Crear el quiz
    const quiz = await db.Quiz.create({
      title,
      description,
      timeLimit: timeLimit || 30,
      maxAttempts: maxAttempts || 1,
      passingScore: passingScore || 70,
      questions, // Array de preguntas en formato JSON
      availableFrom: availableFrom ? new Date(availableFrom) : null,
      availableUntil: availableUntil ? new Date(availableUntil) : null,
      courseId: parseInt(courseId)
    });

    const quizWithCourse = await db.Quiz.findByPk(quiz.id, {
      include: {
        model: db.Course,
        as: 'course',
        attributes: ['id', 'title', 'slug']
      }
    });

    res.status(201).json({
      message: 'Evaluación creada exitosamente',
      quiz: quizWithCourse
    });

  } catch (error) {
    console.error('Error creando evaluación:', error);
    res.status(400).json({ 
      error: 'Error al crear evaluación',
      details: error.message 
    });
  }
});

// GET /api/courses/:courseId/quizzes - Fetch quizzes del un curso en especifico
router.get('/courses/:courseId/quizzes', authenticate, async (req, res) => {
  try {
    const { courseId } = req.params;

    // Verificar que el curso existe
    const course = await db.Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    // Construir condiciones de consulta
    let whereCondition = { courseId };
    
    // Si es estudiante, solo mostrar quizzes publicados y disponibles
    if (req.user.role === 'student') {
      whereCondition.isPublished = true;
      whereCondition.availableFrom = {
        [db.Sequelize.Op.lte]: new Date()
      };
      whereCondition.availableUntil = {
        [db.Sequelize.Op.gte]: new Date()
      };
    }

    const quizzes = await db.Quiz.findAll({
      where: whereCondition,
      include: {
        model: db.Course,
        as: 'course',
        attributes: ['id', 'title', 'slug']
      },
      order: [['createdAt', 'DESC']]
    });

    // Para estudiantes, no enviar las respuestas correctas
    const safeQuizzes = quizzes.map(quiz => {
      if (req.user.role === 'student') {
        const quizData = quiz.toJSON();
        // Remover respuestas correctas para estudiantes
        quizData.questions = quizData.questions.map(question => {
          const { correctAnswer, ...safeQuestion } = question;
          return safeQuestion;
        });
        return quizData;
      }
      return quiz;
    });

    res.json(safeQuizzes);

  } catch (error) {
    console.error('Error obteniendo evaluaciones:', error);
    res.status(500).json({ 
      error: 'Error al obtener evaluaciones',
      details: error.message 
    });
  }
});

module.exports = router;