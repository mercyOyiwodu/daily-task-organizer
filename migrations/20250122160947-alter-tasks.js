'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tasks', 'userId');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tasks', 'userId', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    });
  }
};
