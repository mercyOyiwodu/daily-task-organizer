const express = require('express');
const { createTaskDetail, getTaskDetails, updateTaskDetail, deleteTaskDetail } = require('../controllers/taskDetails');
const router = express.Router();

// TaskDetails routes
router.post('/tasksDetails', createTaskDetail);

router.get('/tasksDetails', getTaskDetails);

router.put('/tasksDetails/:id', updateTaskDetail);
module.exports = router;
