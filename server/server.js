const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const bufferSize = 10;
const circBuffer = require('./Modules/circBuffer');
const resultsBuffer = new circBuffer(bufferSize);

// Serve static files
app.use(express.static('build'));

// Routes
app.get('/api/ping', function (req, res) {
    res.sendStatus(200);
});

// Socket io
io.on('connection', function (socket) {
    console.info('Info: new connection');
    socket.on('new_result', function (result) {
        // minimal validation of input
        if (result.length < 40 && result.includes('=')) {
            resultsBuffer.add(result)
            io.sockets.emit('all_results', resultsBuffer.getAll());
        } else {
            console.error(`Error: invalid result received: ${result}`);
        }
    });
    socket.on('get_results', function () {
        socket.emit('all_results', resultsBuffer.getAll());
    });
    socket.on('disconnect', function () {
        console.info('Info: disconnection');
    });
    socket.on('error', function (err) {
        console.error(`Socket Error: ${err}`);
    });
});

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
http.listen(PORT, () => {
    console.info(`Listening on port: ${PORT}`);
});
