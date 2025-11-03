const { DataTypes } = require('sequelize')
const sequelize = require('../config/database');

const Article = sequelize.define('Article', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [5, 255]
    }
  },
  slug: {   // url
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,  // Contenido completo del artículo
    allowNull: false
  },
  excerpt: {
    type: DataTypes.TEXT,  // Resumen para listados
    allowNull: true
  },
  featuredImage: {
    type: DataTypes.STRING, // Imagen destacada
    allowNull: true
  },
  readTime: {
    type: DataTypes.INTEGER, // Tiempo lectura en minutos
    defaultValue: 5
  },
  status: {
    type: DataTypes.ENUM('draft', 'published', 'archived'),
    defaultValue: 'draft'
  },
  viewCount: {      // Contador de visitas
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  likesCount: {     // Contador de likes
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  isFeatured: {     // Destacar en pagina principal ?
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  metaTitle: {      
    type: DataTypes.STRING, // Para SEO -- Titulo para mejor posicionamiento en google
    allowNull: true
  },
  metaDescription: {
    type: DataTypes.TEXT, // Para SEO -- Esto aparece en resultados de busqueda
    allowNull: true
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Etiquetas- Filtrado y organizacion del contenido
    defaultValue: []
  }
}, {
  tableName: 'articles',
  timestamps: true,
  indexes: [
    { fields: ['slug'] },
    { fields: ['authorId'] },
    { fields: ['status'] },
    { fields: ['isFeatured'] }
  ]

})

module.exports = Article;