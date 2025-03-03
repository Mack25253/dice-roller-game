const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for frontend requests
app.use(cors());

// Dice roll API
app.get('/roll', (req, res) => {
    const sides = parseInt(req.query.sides) || 6;  // Default to a 6-sided die
    const result = Math.floor(Math.random() * sides) + 1;
    res.json({ result });
});

// Wake-up API
app.get('/wake', (req, res) => {
    res.json({ message: "Server is awake!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
