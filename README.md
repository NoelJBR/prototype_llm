# Harry Potter Books Collection with AI Chat

A simple web application that lists Harry Potter books with Amazon links and includes an AI chat window powered by a self-hosted LLM.

## Features

- 📚 Complete list of all 7 Harry Potter books with Amazon purchase links
- 💬 AI chat window with message history
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🤖 Self-hosted LLM integration
- 🚀 Ready for GitHub Pages deployment

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/NoelJBR/prototype_llm.git
cd prototype_llm
```

### 2. Install and Run a Self-Hosted LLM

#### Option A: Ollama (Recommended)

1. Download Ollama from https://ollama.ai
2. Install and run:
   ```bash
   ollama serve
   ```
3. In another terminal, pull a model:
   ```bash
   ollama pull mistral
   ```

#### Option B: LocalAI

```bash
docker run -p 8080:8080 localai/localai:latest
```

#### Option C: vLLM

```bash
pip install vllm
vllm serve mistral-7b-instruct-v0.1
```

### 3. Update API Endpoint (if needed)

Edit script.js and update the LLM_API_ENDPOINT constant:

```javascript
const LLM_API_ENDPOINT = 'http://your-llm-server:port/api/endpoint';
```

### 4. Deploy to GitHub Pages

1. Go to Repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose "main" branch
4. Your site will be available at: https://noeljbr.github.io/prototype_llm

### 5. Enable CORS (for GitHub Pages)

If running LLM locally and accessing from GitHub Pages (HTTPS), enable CORS:

```bash
OLLAMA_ORIGINS=* ollama serve
```

## File Structure

```
prototype_llm/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Troubleshooting

- Make sure your LLM is running
- Check browser console for errors
- Verify API endpoint in script.js
- Enable CORS on your LLM if using GitHub Pages

## Technologies Used

- HTML5
- CSS3 (Responsive Design)
- JavaScript (ES6+)
- Self-hosted LLM (Ollama, LocalAI, or vLLM)