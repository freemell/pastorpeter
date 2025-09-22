const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve the main game page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'game.html'));
});

// API endpoint to get game data
app.get('/api/game-data', (req, res) => {
    res.json({
        message: "Welcome to Pastor Peter's Adventure!",
        version: "1.0.0",
        author: "Milla"
    });
});

app.listen(PORT, () => {
    console.log(`🎮 Cheer Up Pastor Peter game running at http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${__dirname}`);
    console.log(`🚀 Open your browser and go to: http://localhost:${PORT}`);
});
