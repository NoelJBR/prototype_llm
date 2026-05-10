# Nmap Agent with AI Chat

A web application for network scanning using nmap, with AI-powered chat assistance for guidance and result interpretation.

## Features

- 🔍 Network scanning with customizable nmap options
- 💬 AI chat for nmap guidance and result analysis
- 📱 Responsive web interface
- 🤖 Self-hosted LLM integration for intelligent assistance
- 🚀 Ready for deployment

## Setup Instructions

### 1. Prerequisites

- Node.js installed
- nmap installed (on macOS: `brew install nmap`)
- Self-hosted LLM (Ollama recommended)

### 2. Install Dependencies

```bash
npm install express axios
```

### 3. Install and Run Ollama

1. Download from https://ollama.ai
2. Run: `ollama serve`
3. Pull a model: `ollama pull mistral`

### 4. Run the Server

```bash
node server.js  # Assuming you create server.js
```

### 5. Open index.html in browser

Or deploy as needed.

## File Structure

```
prototype_llm/
├── index.html
├── style.css
├── script.js
├── api/
│   └── chat.js
├── server.js
└── README.md
```

## Technologies Used

- HTML5, CSS3, JavaScript
- Node.js, Express
- nmap
- Self-hosted LLM