'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('TaskDetails', 'TaskDetails_ibfk_1');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('TaskDetails', {
      fields: ['taskId'],
      type: 'foreign key',
      name: 'TaskDetails_ibfk_1',
      references: {
        table: 'Tasks',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  }
};
