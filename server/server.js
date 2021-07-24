const http = require('http');
const { getTasks, getTask, createTask, updateTask, deleteTask } = require('./controllers/taskController');
const { headers } = require('./headers');

const PORT = process.env.PORT || 4000;

const server = http.createServer((request, response) => {
    const { method, url } = request;

    if (url === '/api/tasks') {
        switch (method) {
            case 'GET':
                getTasks(response);
                break;
            case 'POST':
                createTask(request, response);
                break;
            case 'OPTIONS':
                response.writeHead(204, headers);
                response.end();
                break;
            default:
                response.writeHead(501, { 'Content-Type': 'application/json', ...headers });
                response.end(JSON.stringify({ message: 'Method Not Implemented' }));
        }

    } else if (url.match(/\/api\/tasks\/([0-9]+)/)) {
        const id = parseInt(url.split('/').pop(), 10);
        switch (method) {
            case 'GET':
                getTask(response, id);
                break;
            case 'PATCH':
                updateTask(request, response, id);
                break;
            case 'DELETE':
                deleteTask(response, id);
                break;
            case 'OPTIONS':
                response.writeHead(204, headers);
                response.end();
                break;
            default:
                response.writeHead(501, { 'Content-Type': 'application/json', ...headers });
                response.end(JSON.stringify({ message: 'Method Not Implemented' }));
        }
        
    } else { 
        response.writeHead(404, { 'Content-Type': 'application/json', ...headers });
        response.end(JSON.stringify({ message: 'Not Found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});