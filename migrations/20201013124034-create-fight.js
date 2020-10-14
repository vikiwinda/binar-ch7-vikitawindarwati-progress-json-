'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Player1_round_1: {
        type: Sequelize.STRING
      },
      Player2_round_1: {
        type: Sequelize.STRING
      },
      Player1_round_2: {
        type: Sequelize.STRING
      },
      Player2_round_2: {
        type: Sequelize.STRING
      },
      Player1_round_3: {
        type: Sequelize.STRING
      },
      Player2_round_3: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.ARRAY(Sequelize.STRING)
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
    await queryInterface.dropTable('Fights');
  }
};