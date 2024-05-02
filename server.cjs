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

// Estrutura de dados para armazenar informações sobre as bolhas
const bubbles = {};

io.on('connection', (socket) => {
  console.log('Um cliente se conectou:', socket.id);

  // Evento para entrar em uma bolha específica
  socket.on('joinBubble', (bubbleId) => {
    // Adicionar o usuário à bolha
    socket.join(bubbleId);

    console.log(`Usuário ${socket.id} entrou na bolha ${bubbleId}`);
  });

  // Evento para enviar mensagem para uma bolha
  socket.on('sendMessageToBubble', (chatMessage) => {
    // Enviar a mensagem para todos os usuários na bolha
    console.log('👽 ~ message:', chatMessage);

    socket.to(chatMessage.bubble.id).emit('receive', chatMessage);

    // io.to(chatMessage.bubble.id).emit('messageFromBubble', {
    //   senderId: socket.id,
    //   chatMessage,
    // });

    console.log(
      `Mensagem enviada para a bolha ${chatMessage.bubble.id} por ${chatMessage.user.username}`
    );
  });

  socket.on('disconnect', () => {
    console.log('Um cliente se desconectou:', socket.id);

    // Remover o usuário de todas as bolhas em que estava
    Object.keys(bubbles).forEach((bubbleId) => {
      bubbles[bubbleId] = bubbles[bubbleId].filter(
        (userId) => userId !== socket.id
      );
    });
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
