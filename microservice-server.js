const express = require('express');
const app = express();
const port = 3000;

// Mock data for motivational quotes
const quotes = {
    random: "Keep pushing forward and never give up!",
    productivity: "The only way to achieve the impossible is to believe it is possible.",
    wellness: "Take care of your body; it's the only place you have to live.",
    success: "Success is the sum of small efforts, repeated day in and day out.",
};

// Middleware to log incoming requests
app.use((req, res, next) => {
    const requestTime = new Date().toISOString();
    console.log(`[${requestTime}] Incoming request: ${req.method} ${req.originalUrl}`);
    next();
});

// Endpoint to fetch a random motivational message
app.get('/quote/random', (req, res) => {
    console.log(`Responding with random quote: "${quotes.random}"`);
    res.json({ message: quotes.random });
});

// Endpoint to fetch a motivational message by category
app.get('/quote', (req, res) => {
    const category = req.query.category;
    if (category && quotes[category]) {
        console.log(`Responding with ${category} quote: "${quotes[category]}"`);
        res.json({ message: quotes[category] });
    } else {
        const errorMessage = `Invalid category: ${category}`;
        console.log(errorMessage);
        res.status(400).json({ error: errorMessage });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
