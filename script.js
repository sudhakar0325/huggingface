const HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/";
const API_TOKEN = ""; // Optional: paste your HF token here for higher limits

async function summarizeText() {
  const inputText = document.getElementById("inputText").value;
  const outputBox = document.getElementById("outputBox");
  const model = document.getElementById("model").value;

  if (!inputText.trim()) {
    outputBox.innerText = "Please enter some text.";
    return;
  }

  outputBox.innerText = "⏳ Summarizing...";

  const response = await fetch(HUGGINGFACE_API_URL + model, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(API_TOKEN && { "Authorization": `Bearer ${API_TOKEN}` })
    },
    body: JSON.stringify({ inputs: inputText })
  });

  if (!response.ok) {
    outputBox.innerText = "⚠️ Failed to summarize. Please try again later.";
    return;
  }

  const data = await response.json();

  if (data.error) {
    outputBox.innerText = `❌ Error: ${data.error}`;
  } else {
    outputBox.innerText = data[0].summary_text || "No summary found.";
  }
}
