const express = require('express');
const axios = require('axios');

const router = express.Router();

// No API key needed for local Ollama
const OLLAMA_URL = 'http://localhost:11434/api/chat';

router.post('/', async (req, res) => {
    const userMessage = req.body.message;

    try {
        // Send to local Ollama
        const response = await axios.post(OLLAMA_URL, {
            model: 'mistral',  // or whatever model
            messages: [{ role: 'user', content: userMessage }],
            stream: false
        });

        // Send the response back
        res.json({ message: response.data.message.content });
    } catch (error) {
        console.error('Error calling Ollama:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;