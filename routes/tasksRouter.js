const express = require('express');
const { createTask, getTasks, updateTask, deleteTask, finishTask } = require('../controllers/tasks');
const router = express.Router();

router.post('/tasks', createTask); // Updated to remove userId
router.patch('/tasks/:id', finishTask);
router.get('/tasks', getTasks);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
