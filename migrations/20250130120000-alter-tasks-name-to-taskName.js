'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('tasks', 'name', 'taskName');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('tasks', 'taskName', 'name');
  }
};
