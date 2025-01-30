const sequelize = require('../database/sequelize');
const Tasks = require('../models/task'); // Correct import

const fetchTasks = async () => {
  try {
    const tasks = await Tasks.findAll();
    console.log('Existing Tasks:', JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error('Error fetching tasks:', error);
  } finally {
    await sequelize.close();
  }
};

fetchTasks();
