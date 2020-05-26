const express = require('express');
const app = express();
const http = require('http').createServer(app);

// Serve static files
app.use(express.static('build'));

// Routes
app.get('/api/ping', function (req, res) {
    res.sendStatus(200);
});

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
http.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
