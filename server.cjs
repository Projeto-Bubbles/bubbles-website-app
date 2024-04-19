const http = require('http');
const express = require('express');
const { Server: SocketIOServer } = require('socket.io');

const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new SocketIOServer(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('Um cliente se conectou:', socket.id);

  socket.on('disconnect', () => {
    console.log('Um cliente se desconectou:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
