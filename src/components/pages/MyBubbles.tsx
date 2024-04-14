import { PaperPlaneRight } from 'phosphor-react';
import { useState } from 'react';
import { Chat } from '../common/Chat';
import Input from '../common/Fields/Input';

const chatList = [
  {
    id: 1,
    user: { id: 1, username: 'Pedro' },
    message: 'Olá, pessoal! Como estão?',
  },
  {
    id: 2,
    user: { id: 2, username: 'Leonidas' },
    message: 'Estou ótimo, obrigado por perguntar!',
  },
  {
    id: 3,
    user: { id: 3, username: 'Marianus' },
    message: 'Alguém sabe quando será a próxima reunião?',
  },
  {
    id: 4,
    user: { id: 1, username: 'Pedro' },
    message: 'A próxima reunião será na próxima quarta-feira.',
  },
  {
    id: 5,
    user: { id: 2, username: 'Leonidas' },
    message: 'Obrigado, David, por compartilhar!',
  },
];

export function MyBubbles() {
  const [chats, setChats] = useState(chatList);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e?: any) => {
    if (e.key === 'Enter') {
      sendMessage(message);
    }
  };

  const sendMessage = (message: string) => {
    message &&
      setChats([
        ...chats,
        {
          id: 1,
          user: { id: 1, username: 'Pedro' },
          message,
        },
      ]);

    setMessage('');
  };

  return (
    <main className="w-full h-screen bg-slate-100 grid grid-cols-[7%_72%_21%]">
      <div>
        <Chat.Sidebar />
      </div>

      <div className="bg-[url('../src/assets/bubbles-effect.png')] bg-cover flex flex-col items-center justify-between px-20 py-10">
        <div className="w-full flex flex-col justify-start gap-6 max-h-[600px] scrollbar-hide overflow-y-auto">
          {chats.map((chat) =>
            chat.user.id === 1 ? (
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
            onKeyDown={(e) => handleSendMessage(e)}
          />

          <div
            onClick={() => sendMessage(message)}
            className="bg-blue-200 w-[2.5rem] h-[2.5rem] grid place-content-center rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-blue-300"
          >
            <PaperPlaneRight size={20} color="#0F172A" weight="duotone" />
          </div>
        </div>
      </div>

      <div className="bg-yellow-50">chat details</div>
    </main>
  );
}
