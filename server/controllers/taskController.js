const Task = require('../models/taskModel');

async function getTasks(req, res) {
    const tasks = await Task.findAll();

    res.json(tasks);
}

async function createTask(req, res) {
    if (!req.body.title) {
        return res.status(400).json({ message: 'Request body does not contain task title' });
    }

    const newTask = await Task.create(req.body.title);
    
    res.status(201).json(newTask);
}

async function updateTask(req, res) {
    if (!req.body) {
        return response.status(400).json({ message: 'Request body does not contain any updates'});
    }

    const id = parseInt(req.params.id, 10);
    const task = await Task.findById(id);

    if (!task) {
        return res.status(400).json({ message: `No task with the id of ${id}` });
    }
    
    const updates = req.body;
    console.log(updates);
    const updatedTask = await Task.update(id, updates);

    res.json(updatedTask);
}

async function deleteTask(req, res) {
    const id = parseInt(req.params.id, 10);
    const task = await Task.findById(id);

    if (!task) {
        return res.status(400).json({ message: `No task with the id of ${id}` });
    }

    await Task.remove(id);
    res.json({ message: 'Task deleted' });
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}