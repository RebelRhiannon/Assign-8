Motivational Message Microservice

This is a simple motivational message microservice that provides random and category-specific motivational quotes.

Communication Contract

Base URL: http://localhost:3000

Endpoints:

GET /quote/random
Description: Fetches a random motivational quote.

Response: Returns a random motivational message.

Example Request:
curl -X GET http://localhost:3000/quote/random

Example Response:
{
  "message": "Keep pushing forward and never give up!"
}

GET /quote?category=<category>
Description: Fetches a motivational quote for a specified category (e.g., productivity, wellness, success).

Query Parameters:
category: The category of the motivational message. Available categories: productivity, wellness, success.

Example Request:
curl -X GET "http://localhost:3000/quote?category=productivity"

Example Response:
{
  "message": "The only way to achieve the impossible is to believe it is possible."
}

Error Response (Invalid Category):
{
  "error": "Invalid category"
}

How to Request Data from the Microservice

To request data from the microservice, you can make HTTP requests to the provided endpoints.

Example: Requesting a Random Quote
You can request a random motivational quote from the microservice using an HTTP GET request to the /quote/random endpoint.

Request:
const fetch = require('node-fetch');

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

getRandomMessage();
How to Receive Data from the Microservice

To receive data from the microservice, you will make a request to one of the endpoints (either /quote/random or /quote?category=<category>) and handle the response.

Example: Requesting a Quote by Category
You can request a motivational quote for a specific category using an HTTP GET request to the /quote?category=<category> endpoint, replacing <category> with one of the available categories (productivity, wellness, success).

Request:
const fetch = require('node-fetch');

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

getCategoryMessage('productivity');
Example Response:
{
  "message": "The only way to achieve the impossible is to believe it is possible."
}

How to Use the Test Program

You can use the provided test program to test the microservice by making HTTP requests to the available endpoints.

Step 1: Install Dependencies
Make sure you have installed the required dependencies (such as node-fetch for making HTTP requests). To install the dependencies, run the following command in the root directory of the project:

npm install

Step 2: Run the Test Program
The test program test-program.js tests the microservice by requesting both a random quote and category-specific quotes (e.g., productivity, wellness, success).

To run the test program, use the following command:

node test-program.js

This will:
Request a random motivational quote.
Request a motivational quote for the productivity category.
Request a motivational quote for the wellness category.
Request a motivational quote for the success category.
Test for an invalid category (nonexistent) and show how the microservice responds.

Example Output:
Testing Random Motivational Message...
Random Motivational Message: Keep pushing forward and never give up!

Testing Productivity Category Motivational Message...
Productivity Motivational Message: The only way to achieve the impossible is to believe it is possible.

Testing Wellness Category Motivational Message...
Wellness Motivational Message: Take care of your body; it's the only place you have to live.

Testing Success Category Motivational Message...
Success Motivational Message: Success is the sum of small efforts, repeated day in and day out.

Testing Invalid Category (Non-existing Category)...
Error fetching nonexistent message: Bad Request

Important Notes:
The test program assumes the microservice is running locally at http://localhost:3000.
Ensure the microservice is running before running the test program.

UML Sequence Diagram

Here’s a simple UML sequence diagram showing how the requesting and receiving of data works between the client and the microservice.

<img width="438" alt="Screenshot 2025-02-24 at 5 07 43 PM" src="https://github.com/user-attachments/assets/94171c1a-432c-440f-b51c-c9a8fda9a629" />

    
The diagram shows:

The Client makes a request to the microservice.
The Microservice responds with the appropriate motivational quote in JSON format.
The Client processes the response.

Installation

Clone the repository to your local machine:
git clone https://github.com/RebelRhiannon/Assign-8.git

Navigate into the project folder

Install the required dependencies:
npm install

Start the microservice:
node microservice-server.js

The microservice will be available at http://localhost:3000. You can then send requests as described in the "How to Request Data from the Microservice" section.
