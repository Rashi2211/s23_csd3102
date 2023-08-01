const { dir } = require('console');
const express = require('express');
const http = require('http');
const path = require('path');
const { dirname } = require('path');
const { disconnect } = require('process');
const socketIO = require('socket.io');

//Create express app
const app = express();

//Create server from express app
const server = http.createServer(app);

//Create Socket.IO instance attached to the server
const io = socketIO(server);
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname+'/index.html'))
});

io.on('connection',(socket)=>{
console.log('a user connected',socket);
socket.on('chat message',(msg)=>{
io.emit('chat message',msg);
});
socket.on('disconnect',()=>{
    console.log('user disconnected');
});
});
server.listen(3000,()=>{
    console.log('listening on port: 3000')
})

