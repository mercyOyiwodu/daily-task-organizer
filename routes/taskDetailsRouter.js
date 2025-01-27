const express = require('express');
const { createTaskDetails, updateTaskDetails, deleteTaskDetails } = require('../controllers/taskDetails');
const router = express.Router();

// TaskDetails routes
router.post('/tasksDetails', createTaskDetails);
router.put('/tasksDetails/:id', updateTaskDetails);
router.delete('/tasksDetails/:id', deleteTaskDetails);

module.exports = router;
