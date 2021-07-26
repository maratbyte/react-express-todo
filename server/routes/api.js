const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

// Get all tasks
router.get('/', getTasks);

// Create task
router.post('/', createTask);

// Update task
router.patch('/:id', updateTask);

// Delete task
router.delete('/:id', deleteTask);


module.exports = router;