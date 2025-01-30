const Tasks = require('../models/task');
const TaskDetails = require('../models/taskDetails');

// Create Task
exports.createTask = async (req, res) => {
  try {
    const { taskName, dueDate } = req.body;
    const newTask = await Tasks.create({ taskName, dueDate });
    res.status(201).json({ message: 'Task created successfully', newTask });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error });
  }
};

// get Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll();
    res.status(200).json({ message: 'Fetch tasks successfully', data: tasks });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { taskName, dueDate } = req.body;
    const updated = await Tasks.update({ taskName, dueDate }, { where: { id } });
    if (updated[0]) {
      const updatedTask = await Tasks.findByPk(id);
      return res.status(200).json({ message: 'Task updated successfully', updatedTask });
    } else {
      return res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update task', error: error.message });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Tasks.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: 'Task not found' });
    }
    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task', error: error.message });
  }
};
