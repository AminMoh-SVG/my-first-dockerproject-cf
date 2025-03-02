const express = require('express');
const app = express();

// Use PORT from environment variables, fallback to 3000
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send("Hello, World! from my-first-dockerproject-cf!");
});

// Start the server with error handling
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error(`❌ Server failed to start: ${err.message}`);
});
