const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const api = require('./routes/api');

// Load config
dotenv.config({ path: './config/config.env' });

connectDB();

// Initialize the app
const app = express();

// Middlewear
app.use(cors());        
app.use(express.json());

// Routes
app.use('/api/tasks', api);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));