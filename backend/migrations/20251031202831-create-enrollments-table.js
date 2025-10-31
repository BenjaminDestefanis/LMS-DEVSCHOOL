'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      slug: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0.00
      },
      duration: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      level: {
        type: Sequelize.ENUM('beginner', 'intermediate', 'advanced'),
        defaultValue: 'beginner'
      },
      status: {
        type: Sequelize.ENUM('draft', 'published', 'archived'),
        defaultValue: 'draft'
      },
      thumbnail: {
        type: Sequelize.STRING,
        allowNull: true
      },
      isFeatured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      enrollmentCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      rating: {
        type: Sequelize.DECIMAL(3, 2),
        defaultValue: 0.00
      },
      requirements: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      learningObjectives: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      instructorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

    // Índices para mejor performance
    await queryInterface.addIndex('courses', ['slug']);
    await queryInterface.addIndex('courses', ['status']);
    await queryInterface.addIndex('courses', ['instructorId']);
    await queryInterface.addIndex('courses', ['isFeatured']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses');
  }
};