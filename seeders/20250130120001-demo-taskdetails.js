'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
    await queryInterface.bulkDelete('task_details', null, {}); // Clear existing entries before seeding

      await queryInterface.bulkInsert('task_details', [
        {
          priority: 'high', // Correct ENUM value
          isCompleted: false,
          taskId: '467944f1-f9c0-4fc3-b23a-25a3856e5d4d', // Valid taskId
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          priority: 'medium', // Correct ENUM value
          isCompleted: true,
          taskId: '467944f1-f9c0-4fc3-b23a-25a3856e5d4d', // Valid taskId
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    } catch (error) {
      console.error('Error seeding task details:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('task_details', null, {});
  }
};
