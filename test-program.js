// Use dynamic import to load node-fetch
import('node-fetch').then(({ default: fetch }) => {
    // Function to test getting a random motivational message
    async function getRandomMessage() {
        try {
            const response = await fetch('http://localhost:3000/quote/random');
            if (response.ok) {
                const data = await response.json();
                console.log("Random Motivational Message:", data.message);
            } else {
                console.log("Error fetching random message:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    // Function to test getting a motivational message by category
    async function getCategoryMessage(category) {
        try {
            const response = await fetch(`http://localhost:3000/quote?category=${category}`);
            if (response.ok) {
                const data = await response.json();
                console.log(`${category.charAt(0).toUpperCase() + category.slice(1)} Motivational Message:`, data.message);
            } else {
                console.log(`Error fetching ${category} message:`, response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    // Test the microservice by requesting random and category-specific messages
    async function testMicroservice() {
        console.log("Testing Random Motivational Message...");
        await getRandomMessage();

        console.log("\nTesting Productivity Category Motivational Message...");
        await getCategoryMessage('productivity');

        console.log("\nTesting Wellness Category Motivational Message...");
        await getCategoryMessage('wellness');

        console.log("\nTesting Success Category Motivational Message...");
        await getCategoryMessage('success');

        console.log("\nTesting Invalid Category (Non-existing Category)...")
        await getCategoryMessage('nonexistent');
    }

    // Run the test program
    testMicroservice();
}).catch((error) => {
    console.error("Error loading fetch:", error);
});
