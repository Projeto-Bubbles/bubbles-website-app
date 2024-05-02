import { PaperPlaneRight } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { ChatMessage } from '../../interfaces/chat';
import { Bubble } from '../common/Bubble';
import { Chat } from '../common/Chat';
import Input from '../common/Fields/Input';

export function MyBubbles() {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [bubbleId, setBubbleId] = useState<number | null>(null);

  const userId = Math.floor(Math.random() * 100);

  const socket = useRef<any>(null);

  useEffect(() => {
    socket.current = io('ws://localhost:5000');

    return () => {
      socket.current.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.current.on('receive', handleReceiveMessage);
      console.log('bora');

      return () => {
        socket.current.off('receive', handleReceiveMessage);
        console.log('fui embora');
      };
    }
  }, [socket]);

  const handleReceiveMessage = (chatMessage: ChatMessage) => {
    console.log('👽 ~ mensagem recebida');
    setChats((prevChats) => [...prevChats, chatMessage]);
  };

  const sendMessageToServer = async () => {
    await socket.current.emit('sendMessageToBubble', {
      id: chats.length + 1,
      bubble: {
        id: bubbleId,
        name: 'Futeboula',
      },
      user: {
        id: userId,
        username: 'helloWorldRu',
      },
      message,
    });
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      sendMessageToServer();
      setMessage('');
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const joinBubbleChat = (bubbleId: number) => {
    console.log('👽 ~ socket:', socket);
    setBubbleId(bubbleId);
    socket.current.emit('joinBubble', bubbleId);
  };

  useEffect(() => {
    console.log('👽 ~ chat:', chats);
  }, [chats]);

  return (
    <main className="w-full h-screen bg-slate-100 grid grid-cols-[7%_72%_21%]">
      <Chat.Sidebar joinBubbleChat={joinBubbleChat} />

      <div className="bg-[url('../src/assets/bubbles-effect.png')] bg-cover flex flex-col items-center justify-between px-20 py-10">
        <div className="w-full flex flex-col justify-start gap-6 max-h-[600px] scrollbar-hide overflow-y-auto">
          {chats.map((chat) =>
            userId === userId ? (
              <Chat.SenderMessage key={chat.id} message={chat.message} />
            ) : (
              <Chat.RecipientMessage
                key={chat.id}
                user={chat.user}
                message={chat.message}
              />
            )
          )}
        </div>

        <div className="w-full flex items-center gap-2">
          <Input
            placeholder="Mensagem"
            color="bg-zinc-200"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />

          <div
            onClick={() => handleSendMessage()}
            className="bg-blue-200 w-[2.5rem] h-[2.5rem] grid place-content-center rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-blue-300"
          >
            <PaperPlaneRight size={20} color="#0F172A" weight="duotone" />
          </div>
        </div>
      </div>

      <Bubble.Details />
    </main>
  );
}
