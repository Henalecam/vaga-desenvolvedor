'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
          

      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [3, 255],
      },
    },
      cpf: {
        type: Sequelize.CHAR,
        allowNull: false,
        validate: {
          len: [11, 11],
      },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          len: [3, 255],
      },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
      },
      


  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('clients');
  }
};
