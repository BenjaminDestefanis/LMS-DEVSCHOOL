const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING, // Titulo curso
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 255]
    }
  },
  description: {
    type: DataTypes.TEXT, 
    allowNull: true
  },
  slug: {  
    type: DataTypes.STRING, // URL amigable del curso
    unique: true,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00
  },
  duration: {
    type: DataTypes.INTEGER, // en horas
    defaultValue: 0
  },
  level: {
    type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
    defaultValue: 'beginner'
  },
  status: {
    type: DataTypes.ENUM('draft', 'published', 'archived'),
    defaultValue: 'draft'
  },
  thumbnail: { // Imagen principal del curso (como portada del curso)
    type: DataTypes.STRING,
    allowNull: true
  },
  isFeatured: { // Si aparece en la seccion destacados, o solo en la parte general
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  enrollmentCount: { // Contador de estudiantes matriculados en el curso
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  rating: { // Promedio de calificacion 
    type: DataTypes.DECIMAL(3, 2),
    defaultValue: 0.00
  },
  requirements: { // Prerequisitos para tomar el curso
    type: DataTypes.TEXT,
    allowNull: true
  },
  learningObjectives: { // Lo que lograra el estudiante
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'courses',
  timestamps: true,
  indexes: [
    {
      fields: ['slug']
    },
    {
      fields: ['status']
    },
    {
      fields: ['instructorId'] // Lo agregaremos con relaciones
    }
  ]
});

module.exports = Course;