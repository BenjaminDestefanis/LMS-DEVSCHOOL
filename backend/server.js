const express = require('express');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Sincronizar base de datos al iniciar
db.syncDatabase();

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando con Sequelize + PostgreSQL' });
});

// Ruta para crear usuario de ejemplo
app.post('/users', async (req, res) => {
  try {
    const user = await db.User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para obtener usuarios
app.get('/users', async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});