// const app = require('express')();
// // * Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2).
// const http = require('http').createServer(app);
// const io = require('socket.io')(http);

// // app.get('/', (req, res) => {
// // 	res.send('Hello World!');
// // });

// io.on('connection', (socket) => {
// 	console.log('a user connected');
// });

// http.listen(port, () => {
// 	console.log(`Listening at http://localhost:${port}`);
// });

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// app.get('/', (req, res) => {
// 	res.send('<h1>Hello world</h1>');
// });
// ?Serving static files in Express
// express.static(root, [options]);
// app.use(express.static('public'));
app.use(express.static('css'));
app.use(express.static('/css'));
app.use(express.static('/css/index.css'));
app.use(express.static('./css'));
app.use(express.static('./css/index.css'));
app.use(express.static('../css'));
app.use(express.static('../css/index.css'));

app.get('/', (req, res) => {
	res.sendFile('C:/Users/jelan/Documents/node-chat-app/index.html');
	// res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
	console.log('listening on *:3000');
});
