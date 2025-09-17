// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:3000", // local frontend
    "https://netflix-gpt-punb.onrender.com" // deployed frontend
  ],
  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
  credentials: true
}));

// OpenAI setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});

// Test endpoint
app.get("/", (req, res) => {
  res.send("✅ Backend is running");
});

// GPT Movies endpoint
app.post("/api/gpt-movies", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    });

    res.json({ result: completion.choices[0].message.content });
  } catch (err) {
    console.error("OpenAI error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
