const TaskDetails = require('../models/taskDetails');

// Create TaskDetail
exports.createTaskDetail = async (req, res) => {
  try {
    const { priority, isCompleted, taskId } = req.body;
    const newTaskDetail = await TaskDetails.create({ priority, isCompleted, taskId });
    res.status(201).json({ message: 'Task detail created successfully', newTaskDetail });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error });
  }
};

// Read TaskDetails
exports.getTaskDetails = async (req, res) => {
  try {
    const taskDetails = await TaskDetails.findAll();
    res.status(200).json({ message: 'Fetch task details successfully', data: taskDetails });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Update TaskDetail
exports.updateTaskDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const { priority, isCompleted } = req.body;
    const updated = await TaskDetails.update({ priority, isCompleted }, { where: { id } });
    if (updated[0]) {
      const updatedTaskDetail = await TaskDetails.findByPk(id);
      return res.status(200).json({ message: 'Task detail updated successfully', updatedTaskDetail });
    } else {
      return res.status(404).json({ error: 'Task detail not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update task detail', error: error.message });
  }
};

// Delete TaskDetail
exports.deleteTaskDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await TaskDetails.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: 'Task detail not found' });
    }
    return res.status(200).json({ message: 'Task detail deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task detail', error: error.message });
  }
};
