'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: [3, 100],
          },
        },
        sku: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            len: [3, 100],
          },
          price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
            validate: {
              min: 0,
            },
          },
          stock: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
              min: 0,
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
        },
      });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
