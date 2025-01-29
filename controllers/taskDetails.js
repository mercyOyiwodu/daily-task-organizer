const TaskDetails = require('../models/taskDetails');
const {v4:uuid}= require("uuid")

// Create TaskDetails
exports.createTaskDetails = async (req, res) => {
  try {
    const {priority, isCompleted } = req.body;
    const newTaskDetails = await TaskDetails.create({id:uuid(),taskId:uuid(), priority, isCompleted });
    res.status(201).json({message:'task created successfully',newTaskDetails});
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task details',error:error.message });
  }
};

// Update TaskDetails
exports.updateTaskDetails = async (req, res) => {
  try {
    const {id} = req.params;
    const { priority, isCompleted } = req.body;
    const updated= await TaskDetails.update({ priority, isCompleted }, { where: {id}});

    if (updated) {
      const updatedTaskDetails = await TaskDetails.findByPk(id);
      res.status(200).json({message:"tasks updated successfully",updatedTaskDetails});
    } else {
      res.status(404).json({ error: 'Task details not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task details' });
  }
};

// Delete TaskDetails
exports.deleteTaskDetails = async (req, res) => {
  try {
    const {id} = req.params;
    const deleted = await TaskDetails.destroy({  where: {id}});
    if (deleted) {
      res.status(204).send({message:'task deleted successfully',deleted});
    } else {
      res.status(404).json({ error: 'Task details not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task details' });
  }
};