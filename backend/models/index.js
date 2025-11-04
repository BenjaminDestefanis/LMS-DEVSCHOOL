const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


// Importar modelos
const User        = require('./user');
const Course      = require('./course');
const Enrollment  = require('./enrollment'); // Inscripciones
const Article     = require('./article');
const Assignment  = require('./assignment'); // Asignaciones - gestion de asignaciones y tareas
const Quiz        = require('./quiz'); // Ejercicios
const Question    = require('./question') // Ejercicios Avanzados


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

// Un Usuario puede tener muchos articulos
User.hasMany(Article, {
  foreignKey: 'authoId',      // Crea Columna authorID en tabla articles
  as: 'articles'              // Alias: user.getArticles() para obtener articulos
})

// Un articulo pertenece a un solo usuario
Article.belongsTo(User, {
  foreignKey: 'authorId',     // Misma columna
  as: 'author'                // Alias: article.getAuthor()
});

// Relaciones para Assignments
Course.hasMany(Assignment, {
  foreignKey: 'courseId',
  as: 'assignments'
});

Assignment.belongsTo(Course, {
  foreignKey: 'courseId',
  as: 'course'
});

// Relaciones para Quizzes
Course.hasMany(Quiz, {
  foreignKey: 'courseId',
  as: 'quizzes'
});

Quiz.belongsTo(Course, {
  foreignKey: 'courseId',
  as: 'course'
});

// Relaciones para Questions (si usas el modelo separado)
Quiz.hasMany(Question, {
  foreignKey: 'quizId',
  as: 'QuizQuestions'
});

Question.belongsTo(Quiz, {
  foreignKey: 'quizId',
  as: 'quiz'
});


// Objeto para exportar todos los modelos
const db = {
  sequelize,
  Sequelize: require('sequelize'),
  User,
  Course,
  Enrollment,
  Article,
  Assignment,
  Quiz,
  Question

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