import { PaperPlaneRight } from 'phosphor-react';
import { useState } from 'react';
import useSocket from '../../hooks/useSocket';
import { ChatMessage } from '../../interfaces/chat';
import { Bubble } from '../common/Bubble';
import { Chat } from '../common/Chat';
import Input from '../common/Fields/Input';

export function MyBubbles() {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const { sendMessage } = useSocket();

  const userId = Math.floor(Math.random() * 100); // Gera um ID único para cada usuário

  const handleSendMessage = (message: string) => {
    if (message.trim() !== '') {
      const chatMessage: ChatMessage = {
        id: chats.length + 1,
        user: {
          id: userId, // Adiciona o ID do usuário à mensagem
          username: 'helloWorldRu',
        },
        bubble: {
          id: 1,
          name: 'Futeboula',
        },
        message,
      };

      sendMessage(chatMessage);

      setChats((prevChats) => [...prevChats, chatMessage]);

      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage(message);
    }
  };

  return (
    <main className="w-full h-screen bg-slate-100 grid grid-cols-[7%_72%_21%]">
      <Chat.Sidebar />

      <div className="bg-[url('../src/assets/bubbles-effect.png')] bg-cover flex flex-col items-center justify-between px-20 py-10">
        <div className="w-full flex flex-col justify-start gap-6 max-h-[600px] scrollbar-hide overflow-y-auto">
          {chats.map((chat) =>
            chat.user.id === userId ? (
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
            onClick={() => handleSendMessage(message)}
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
