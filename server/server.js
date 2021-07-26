const express = require('express');
const cors = require('cors');
const api = require('./routes/api');

const app = express();

app.use(cors());        
app.use(express.json());
app.use('/api/tasks', api);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));  