'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.UUID
      },
      user_name:{
        type: Sequelize.STRING(255),
          allowNull: false
      },
      user_email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: "users_user_email_key"
      },
      user_password: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      user_address: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      user_bus: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      ticket_num: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};