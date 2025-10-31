'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Agregar todos los campos nuevos
    await queryInterface.addColumn('users', 'role', {
      type: Sequelize.ENUM('student', 'instructor', 'admin'),
      defaultValue: 'student',
      allowNull: false
    });

    await queryInterface.addColumn('users', 'avatar', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('users', 'isActive', {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false
    });

    await queryInterface.addColumn('users', 'lastLogin', {
      type: Sequelize.DATE,
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    // Revertir todos los cambios
    await queryInterface.removeColumn('users', 'role');
    await queryInterface.removeColumn('users', 'avatar');
    await queryInterface.removeColumn('users', 'isActive');
    await queryInterface.removeColumn('users', 'lastLogin');
    
    // Eliminar el tipo ENUM
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_users_role";');
  }
};
