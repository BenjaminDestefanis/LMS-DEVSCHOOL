const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


// Importar modelos
const User = require('./user');
const Course = require('./course');
const Enrollment = require('./enrollment');

// 🔗 RELACIONES

// Resume : Un usuario puede tener muchos cursos
User.hasMany(Course, {
  foreignKey: 'instructorId', // Columna Modelo Course
  as: 'courses'               // Alias para la consulta
});

// Resume : Un Curso, puede tene 1 Instructor
Course.belongsTo(User, {
  foreignKey: 'instructorId', 
  as: 'instructor'
});

// Resume : Un Usuario puede tener muchos Cursos.
User.belongsToMany(Course, {
  through: Enrollment,
  foreignKey: 'studentId',
  as: 'enrolledCourses'
});

// Resume : Un Curso puede tener muchos usuarios.
Course.belongsToMany(User, {
  through: Enrollment, 
  foreignKey: 'courseId',
  as: 'students'
});


// Objeto para exportar todos los modelos
const db = {
  sequelize,
  Sequelize: require('sequelize'),
  User,
  Course,
  Enrollment
  // Agregar más modelos aquí
};

// Sincronizar modelos con la base de datos
db.syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // force: true borra tablas existentes , en false , respeta las tablas creadas
    console.log('✅ Modelos sincronizados con la base de datos.');
  } catch (error) {
    console.error('❌ Error sincronizando modelos:', error);
  }
};

module.exports = db;