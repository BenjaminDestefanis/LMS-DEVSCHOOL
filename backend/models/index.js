const sequelize = require('../config/database');
// Importar modelos
const User = require('./user');

// Objeto para exportar todos los modelos
const db = {
  sequelize,
  Sequelize: require('sequelize'),
  User
  // Agregar más modelos aquí
};

// Sincronizar modelos con la base de datos
db.syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // force: true borra tablas existentes
    console.log('✅ Modelos sincronizados con la base de datos.');
  } catch (error) {
    console.error('❌ Error sincronizando modelos:', error);
  }
};

module.exports = db;