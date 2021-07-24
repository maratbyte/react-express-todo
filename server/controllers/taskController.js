const Task = require('../models/taskModel');
const { getPostData } = require('../utilityFuncs');
const { headers }  = require('../headers');


// @description     Gets all tasks
// @route           GET /api/tasks
async function getTasks(response) {
    try {
        const tasks = await Task.findAll();

        response.writeHead(200, { 'Content-Type': 'application/json', ...headers });
        response.end(JSON.stringify(tasks));
    } catch (error) {
        console.log(error);
    }
}

// @description     Gets a single task by ID
// @route           GET /api/tasks/:id
async function getTask(response, id) {
    try {
        const task = await Task.findById(id);

        if (!task) {
            response.writeHead(404, { 'Content-Type': 'application/json', ...headers });
            response.end(JSON.stringify({ message: 'Task Not Found' }));
        } else {
            response.writeHead(200, { 'Content-Type': 'application/json', ...headers });
            response.end(JSON.stringify(task));
        }
    } catch (error) {
        console.log(error);
    }
}

// @description     Creates a task
// @route           POST /api/tasks/
async function createTask(request, response) {
    try {
        const body = await getPostData(request);
        const { title } = body;
        const newTask = await Task.create(title);

        response.writeHead(201, { 'Content-Type': 'application/json', ...headers });
        response.end(JSON.stringify(newTask));
    } catch (error) {
        console.log(error);
    }
}

// @description     Updates a task
// @route           PUT /api/tasks/:id
async function updateTask(request, response, id) {
    try {
        let task = await Task.findById(id);

        if (!task) {
            response.writeHead(404, { 'Content-Type': 'application/json', ...headers });
            response.end(JSON.stringify({ message: 'Task Not Found' }));
        } else {
            const updates = await getPostData(request);
            const updatedTask = await Task.update(id, updates);

            response.writeHead(200, { 'Content-Type': 'application/json', ...headers });
            response.end(JSON.stringify(updatedTask));
        }
    } catch (error) {
        console.log(error);
    }
}

// @description     Deletes a task
// @route           DELETE /api/tasks/:id
async function deleteTask(response, id) {
    try {
        const task = await Task.findById(id);

        if (!task) {
            response.writeHead(404, { 'Content-Type': 'application/json', ...headers });
            response.end(JSON.stringify({ message: 'Task Not Found' }));
        } else {
            await Task.remove(id);
            response.writeHead(200, { 'Content-Type': 'application/json', ...headers });
            response.end(JSON.stringify({ message: 'Task deleted' }));
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}