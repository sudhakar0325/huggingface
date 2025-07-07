# 📝 AI Text Summarizer (Free LLM Version)

This is a lightweight, frontend-only AI-powered text summarizer built using HTML, CSS, and JavaScript. It uses **free Hugging Face models** (like BART and T5) to summarize large blocks of text without requiring any backend or paid APIs.

## ✨ Features
- Paste any long article, email, or content
- Get a short summary instantly
- 100% frontend-only
- Uses Hugging Face hosted models (no OpenAI cost!)
- Optional: Plug in your Hugging Face API token for higher limits

## 🔧 Tech Stack
- HTML, CSS, JavaScript
- Hugging Face Inference API

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/text-summarizer-js.git
cd text-summarizer-js
```

### 2. Open in Browser
Just open `index.html` in your browser. No server or Python setup needed!

## 🔐 Optional: Hugging Face API Token
To increase your request limit:
1. Sign up at https://huggingface.co
2. Go to Settings → Access Tokens → Generate token
3. Paste it inside `script.js` like this:
```js
const API_TOKEN = "your_token_here";
```

## 📸 Demo
https://your-demo-link.netlify.app

## 📄 License
MIT License – free for personal or commercial use.
