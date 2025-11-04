// models/quiz.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Quiz = sequelize.define('Quiz', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  timeLimit: {
    type: DataTypes.INTEGER, // Límite de tiempo en minutos
    defaultValue: 30
  },
  maxAttempts: {
    type: DataTypes.INTEGER, // Intentos máximos
    defaultValue: 1
  },
  passingScore: {
    type: DataTypes.INTEGER, // Puntaje para aprobar
    defaultValue: 70
  },
  questions: {
    type: DataTypes.JSON, // Array de preguntas en formato JSON
    allowNull: false
  },
  isPublished: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  availableFrom: {
    type: DataTypes.DATE, // Fecha de disponibilidad
    allowNull: true
  },
  availableUntil: {
    type: DataTypes.DATE, // Fecha límite
    allowNull: true
  }
}, {
  tableName: 'quizzes',
  timestamps: true
});

module.exports = Quiz;