const Task  = require('../models/task');
const {v4:uuid}=require('uuid')

// Create Task
 exports. createTask = async (req, res) => {
  try {
    const{id,taskName,dueDate}=req.body
    const newTask = await Task.create({id:uuid(),id,taskName,dueDate});
    res.status(201).json({message:'task created successfully',newTask});
  } catch (error){
    res.status(500).json({message:'internal server error',error:error.message})
  }
  }


// Read Tasks
 exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({message: 'internal server error',error:error.message });
  }
};

// Update Task
exports.updateTask= async (req, res) => {
  try {
    const {id} = req.params;
    const { taskName, dueDate} = req.body;
    const updated= await Task.update({ taskName, dueDate }, { where: { id }});
    if (updated) {
      const updatedTask = await Task.findByPk(id);
      res.status(200).json({message:'Task updated successfully',updatedTask});
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({message:'Failed to update task',error:error.message });
  }
};

// Delete Task

 exports.deleteTask = async (req, res) => {
  try {
    const {id} = req.params;
    const deleted = await Task.destroy({where: {id}});
    if (deleted) {
      res.status(204).send({message:'Task deleted successfully'});
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task',error:error.message});
  }
};


