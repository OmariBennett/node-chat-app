const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const __dirname_IndexHTML = __dirname.replace('\\js', '\\') + 'index.html';

app.use(express.static('css'));
app.use(express.static('js'));

app.get('/', (req, res) => {
	res.sendFile(__dirname_IndexHTML);
});

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

server.listen(3000, () => {
	console.log('listening on *:3000');
});
