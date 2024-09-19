const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const routes = require('./Routes/Router');

// Middleware
app.use(express.json());
app.use(cors());

// route
app.use('/', routes);

// Listen on port
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
