let tasks = require('../data/tasks');
const { writeDataToFile } = require('../utilityFuncs');

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(tasks);
    });
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const task = tasks.find(task => task.id === id);
        resolve(task);
    });
}

function create(title) {
    return new Promise((resolve, reject) => {
        const id = tasks.length ? tasks.reduce((maxId, { id }) => id > maxId ? id : maxId, 0) + 1 : 0;
        const task = {id, title, done: false};
        tasks.push(task);
        writeDataToFile('./data/tasks.json', tasks);
        resolve(task);
    });
}

function update(id, updates) {
    return new Promise((resolve, reject) => {
        const task = tasks.find(task => task.id === id);
        console.log(updates);
        for (let prop in updates) {
            task[prop] = updates[prop];
        }
        writeDataToFile('./data/tasks.json', tasks);
        resolve(task);
    });
}

function remove(id) {
    return new Promise((resolve, reject) => {
        tasks = tasks.filter((task) => task.id !== id);
        writeDataToFile('./data/tasks.json', tasks);
        resolve();
    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}