'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
    await queryInterface.bulkDelete('TaskDetails', null, {}); // Clear existing entries before seeding

      await queryInterface.bulkInsert('TaskDetails', [
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
      console.error('Error seeding TaskDetails:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TaskDetails', null, {});
  }
};
