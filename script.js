const LLM_API_ENDPOINT = 'http://localhost:11434/api/generate';
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatOutput = document.getElementById('chat-output');
let conversationHistory = [];
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;
    displayMessage(userMessage, 'user');
    chatInput.value = '';
    conversationHistory.push({ role: 'user', content: userMessage });
    try {
        const response = await fetch(LLM_API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ model: 'mistral', prompt: userMessage, stream: false })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const aiResponse = data.response || 'No response from AI';
        displayMessage(aiResponse, 'ai');
        conversationHistory.push({ role: 'assistant', content: aiResponse });
    } catch (error) {
        console.error('Error:', error);
        displayMessage('Error connecting to AI. Make sure your LLM is running at ' + LLM_API_ENDPOINT, 'ai');
    }
}

function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = message;
    chatOutput.appendChild(messageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}