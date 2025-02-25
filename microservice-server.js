const express = require('express');
const app = express();
const port = 3000;

// Mock data for motivational quotes
const quotes = {
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

// Endpoint to fetch a random quote from any category
app.get('/quote/random', (req, res) => {
    // Get an array of keys from the quotes object (categories)
    const categories = Object.keys(quotes);
    
    // Select a random category
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    // Fetch the quote from the selected category
    const randomQuote = quotes[randomCategory];
    
    console.log(`Responding with random quote from category "${randomCategory}": "${randomQuote}"`);
    res.json({ message: randomQuote });
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
