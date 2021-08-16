const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const __dirname_IndexHTML =
	'C:/Users/jelan/Documents/node-chat-app/js/index.html';

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
	console.log('a user connected');
});

// Each socket also fires a special disconnect event:
io.on('connection', (socket) => {
	console.log('*a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

// And in index.js we print out the chat message event:
io.on('connection', (socket) => {
	socket.on('chat message', (msg) => {
		console.log('message: ' + msg);
	});
});

io.on('connection', (socket) => {
	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	});
});

const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
