// Chat functionality
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    addMessage(message, 'user');
    input.value = '';

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        addMessage(data.message, 'ai');
    } catch (error) {
        addMessage('Error: Could not connect to AI', 'ai');
    }
}

function addMessage(text, type) {
    const output = document.getElementById('chat-output');
    const div = document.createElement('div');
    div.textContent = text;
    div.className = 'message ' + (type === 'user' ? 'user-message' : 'ai-message');
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
}

// Scan functionality
document.getElementById('scan-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const target = document.getElementById('target').value;
    const options = document.getElementById('options').value;

    const resultDiv = document.getElementById('scan-result');
    resultDiv.textContent = 'Scanning...';

    try {
        const response = await fetch('/api/scan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ target, options })
        });
        const data = await response.json();
        if (data.error) {
            resultDiv.textContent = 'Error: ' + data.error;
        } else {
            resultDiv.textContent = data.result;
        }
    } catch (error) {
        resultDiv.textContent = 'Error: Could not perform scan';
    }
});