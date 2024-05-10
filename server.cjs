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

  socket.on('joinBubble', (bubbleId) => {
    socket.join(bubbleId);
    console.log(`Usuário ${socket.id} entrou na bolha ${bubbleId}`);
  });

  socket.on('sendMessageToBubble', (chatMessage) => {
    console.log('👽 ~ message:', chatMessage);
    socket.to(chatMessage.bubble.id).emit('receive', chatMessage);
    console.log(
      `Mensagem enviada para a bolha ${chatMessage.bubble.id} por ${chatMessage.user.username}`
    );
  });

  socket.on('disconnect', () => {
    console.log('Um cliente se desconectou:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
