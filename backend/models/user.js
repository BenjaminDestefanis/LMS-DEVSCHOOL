const { DataTypes }   = require('sequelize');
const sequelize       = require('../config/database');
const bcrypt          = require('bcryptjs');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,

    // Configuracion bcrypt
    set(value) {
      // Hash automatico que guarda la contraseña
      const hash = bcrypt.hashSync(value, 10);
      this.setDataValue('password', hash);
    }
  },
  role: {
    type: DataTypes.ENUM('student', 'instructor', 'admin'),
    defaultValue: 'student',
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  lastLogin: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'users',
  timestamps: true // created_at y updated_at automáticos
});

// Metodo para comparar contraseña
User.prototype.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
}
// Metodo para comparar contraseña

module.exports = User;