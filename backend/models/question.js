// models/question.js (OPCIONAL - para quizzes más avanzados, este modelo es mas complejo quiz.js)
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Question = sequelize.define('Question', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  questionText: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  questionType: {
    type: DataTypes.ENUM('multiple_choice', 'true_false', 'short_answer', 'essay'),
    defaultValue: 'multiple_choice'
  },
  options: {
    type: DataTypes.JSON, // { A: "Opción A", B: "Opción B", ... }
    allowNull: true
  },
  correctAnswer: {
    type: DataTypes.STRING, // Puede ser 'A', 'B', o texto para respuestas cortas
    allowNull: false
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 10
  },
  explanation: {
    type: DataTypes.TEXT, // Explicación de la respuesta correcta
    allowNull: true
  }
}, {
  tableName: 'questions',
  timestamps: true
});

module.exports = Question;