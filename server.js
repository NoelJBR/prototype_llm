const express = require('express');
const path = require('path');
const chatRouter = require('./api/chat');
const scanRouter = require('./api/scan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Routes
app.use('/api/chat', chatRouter);
app.use('/api/scan', scanRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});