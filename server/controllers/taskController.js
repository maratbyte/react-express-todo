const Task = require('../models/Task');

async function getTasks(req, res) {
    const tasks = await Task.find();
    res.json(tasks);
}

async function createTask(req, res) {
    if (!req.body.title) {
        return res.status(400).json({ message: 'Request body does not contain task title' });
    }

    const newTask = new Task(req.body);
    await newTask.save();
    
    res.status(201).json(newTask);
}

async function updateTask(req, res) {
    const id = req.params.id;
    const updates = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true });

    res.json(updatedTask);
}

async function deleteTask(req, res) {
    const id = req.params.id;
    await Task.findByIdAndDelete(id);

    res.json({ message: 'Task deleted' });
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}