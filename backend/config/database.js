//import { Sequelize } from 'sequelize';
const { Sequelize } = require('sequelize')
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'lms_devschool',  // nombre base de datos
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || 'password',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false, // esttablecer en false Para no ver logs de SQL en consola
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);


//Test Conecction

const testConnection = async () => {
  try {

    await sequelize.authenticate();
    console.log('Conexcion a PostgreSQL Existosa')
  } catch (error){
    console.error('Error conexion con DB :', error);
  }
}

testConnection()

// en CommonJS
module.exports = sequelize
//export default sequelize;