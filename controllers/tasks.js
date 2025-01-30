const Task = require('../models/task');
const { v4: uuid } = require('uuid');

// Create Task
exports.createTask = async (req, res) => {
  try {
    const { name, priority, dueDate } = req.body;

    const newTask = await Task.create({ id: uuid(), name, priority, dueDate });

    res.status(201).json({ message: 'Task created successfully', newTask });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error });
  }
};

// Read Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json({
      message: 'Fetch tasks successfully',
      data: tasks
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

exports.finishTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
    }

    if (task.isCompleted === true) {
      return res.status(400).json({ message: 'Task is already completed' }); 
    }

    task.isCompleted = true;
    task.save();

    res.status(200).json({
      message: 'Task completed successfully',
      data: task
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, dueDate } = req.body;
    const updated = await Task.update({ name, dueDate }, { where: { id } });
    if (updated) {
      const updatedTask = await Task.findByPk(id);
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
    const deleted = await Task.destroy({ where: { id } });
    if (!deleted) {
      return res.status(204).json({ message: 'unable to delete'});
    } else {
     return res.status(404).json(
     'Task deleted' );
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task', error: error.message });
  }
};
