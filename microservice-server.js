// Import dependencies
const express = require('express');
const app = express();
const port = 3000;

// Sample motivational messages
const quotes = [
    { category: "Productivity", message: "Success is not final, failure is not fatal: it is the courage to continue that counts." },
    { category: "Wellness", message: "Take care of your body. It's the only place you have to live." },
    { category: "Success", message: "The only way to do great work is to love what you do." },
    { category: "General", message: "Believe you can and you're halfway there." },
    { category: "Wellness", message: "You are stronger than you think." },
    { category: "Productivity", message: "Don’t watch the clock; do what it does. Keep going." }
];

// Middleware to handle JSON requests
app.use(express.json());

// Endpoint to get a motivational message (can filter by category)
app.get('/quote', (req, res) => {
    const category = req.query.category;

    // If a category is provided, filter quotes by category
    if (category) {
        const filteredQuotes = quotes.filter(q => q.category.toLowerCase() === category.toLowerCase());
        if (filteredQuotes.length > 0) {
            return res.json({ message: filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)].message });
        } else {
            return res.status(404).json({ error: "No quotes found for this category." });
        }
    }

    // If no category, return a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ message: randomQuote.message });
});

// Endpoint to get a random motivational message
app.get('/quote/random', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ message: randomQuote.message });
});

// Start the server
app.listen(port, () => {
    console.log(`Motivational message microservice is running on http://localhost:${port}`);
});
