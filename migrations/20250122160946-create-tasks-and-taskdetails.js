'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TaskDetails', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      taskId: {
        type: Sequelize.UUID,
        references: {
          model: 'Tasks',
          key: 'id',
        },
        allowNull: false,
      },
      priority: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      isCompleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATETIME,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TaskDetails');
    await queryInterface.dropTable('Tasks');
  }
};
