// models/assignment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Assignment = sequelize.define('Assignment', {
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
  instructions: {
    type: DataTypes.TEXT, // Instrucciones detalladas de la tarea
    allowNull: false
  },
  dueDate: {
    type: DataTypes.DATE, // Fecha de entrega
    allowNull: false
  },
  maxPoints: {
    type: DataTypes.INTEGER, // Puntos máximos
    defaultValue: 100
  },
  assignmentType: {
    type: DataTypes.ENUM('homework', 'project', 'essay', 'presentation'),
    defaultValue: 'homework'
  },
  attachments: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Archivos adjuntos (URLs)
    defaultValue: []
  },
  isPublished: {
    type: DataTypes.BOOLEAN, // Si está visible para estudiantes
    defaultValue: false
  }
}, {
  tableName: 'assignments',
  timestamps: true
});

module.exports = Assignment;