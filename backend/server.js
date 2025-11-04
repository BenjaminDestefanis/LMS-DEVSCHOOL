const express = require('express');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;


// Imprtacion rutas 
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const articleRoutes = require('./routes/articles');
const courseRoutes = require('./routes/courses');
const assignmentRoutes = require('./routes/assignments')
const quizRoutes = require('./routes/quizzes')



// Middleware
app.use(express.json()); // Manujo de archivos json
app.use('/api/auth', authRoutes) //Manejo de auth

// Rutas
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/articles', articleRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api', assignmentRoutes)
app.use('/api', quizRoutes)


// Sincronizar base de datos al iniciar
db.syncDatabase();

// Ruta de prueba
app.get('/', (req, res) => {
   res.json({ 
    message: '🚀 API LMS DevSchool funcionando',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users', 
      articles: '/api/articles',
      courses: '/api/courses (próximamente)'
    }
  });
});


//Ruta protegida de ejemplo
/* app.get('/api/protected', authenticate, (req, res) => {
  res.json({
    message: 'Esta es una ruta protegida',
    user : req.user
  })
}) */


app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});