const express = require('express');
const axios = require('axios');

const router = express.Router();

// Get the API key from environment variables
const API_KEY = process.env.OLLAMA_API_KEY;

router.post('/', async (req, res) => {
    const userMessage = req.body.message;

    try {
        // Forward the request to the Ollama API
        const response = await axios.post('https://api.ollama.com/chat', {
            message: userMessage
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        // Send the response back to the frontend
        res.json(response.data);
    } catch (error) {
        console.error('Error calling Ollama API:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;