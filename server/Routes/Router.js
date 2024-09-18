const express = require('express');
const router = express.Router(); // Create an instance of the Express router
const controller = require('../Controllers/Controller'); // Import your controller

// routes
app.post('/api/store', controller.postData);
app.get('/api/store', controller.getData);

module.exports = router;