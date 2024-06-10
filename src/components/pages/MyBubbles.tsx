import { Microphone, PaperPlaneRight } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { useSpeechRecognition } from '../../hooks/useSpeechRecognition';
import { BubbleProps } from '../../interfaces/bubble';
import { ChatMessage } from '../../interfaces/chat';
import { getBubblesById } from '../../services/bubbleServices';
import { getLocalUser } from '../../services/userServices';
import { Bubble } from '../common/Bubble';
import { Chat } from '../common/Chat';
import Input from '../common/Fields/Input';

export function MyBubbles() {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [bubbleId, setBubbleId] = useState<number | null>(null);
  const [bubble, setBubble] = useState<BubbleProps>();
  const { isRecording, transcript, handleStartRecording, handleStopRecording } =
    useSpeechRecognition();

  const user: any = getLocalUser();

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

      return () => {
        socket.current.off('receive', handleReceiveMessage);
      };
    }
  }, [socket]);

  const handleReceiveMessage = (chatMessage: ChatMessage) => {
    setChats((prevChats) => [...prevChats, chatMessage]);
  };

  const handleSendMessage = async () => {
    if (message.trim() !== '') {
      const chatMessage: ChatMessage = {
        id: chats.length + 1,
        bubble: {
          id: bubbleId!!,
          name: 'Futeboula',
        },
        user: {
          id: user.id,
          username: user.nickname,
        },
        message,
      };

      await socket.current.emit('sendMessageToBubble', chatMessage);

      setChats((prevChats) => [...prevChats, chatMessage]);

      setMessage('');
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSetTranscript = () => {
    if (!isRecording) {
      return handleStartRecording();
    }

    handleStopRecording();
    setMessage(transcript);
  };

  const joinBubbleChat = (bubbleId: number) => {
    getBubblesById(bubbleId).then((bubble: any) => {
      setBubble(bubble.data);
    });

    setBubbleId(bubbleId);
    socket.current.emit('joinBubble', bubbleId);
  };

  return (
    <main className="w-full h-screen bg-slate-100 grid grid-cols-[7%_72%_21%]">
      <Chat.Sidebar joinBubbleChat={joinBubbleChat} />

      <div className="bg-[url('../src/assets/bubbles-effect.png')] bg-cover flex flex-col items-center justify-between px-20 py-10">
        {bubbleId ? (
          <>
            <div className="w-full flex flex-col justify-start gap-6 max-h-[600px] scrollbar-hide overflow-y-auto">
              {chats.map((chat) =>
                chat.user.id === user.id ? (
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
                placeholder={`${
                  isRecording
                    ? 'Gravando... clique novamente para parar'
                    : 'Mensagem'
                }`}
                disabled={isRecording}
                color="bg-zinc-200"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
              />

              <button
                onClick={() => handleSetTranscript()}
                className={`size-10 grid place-content-center rounded-md cursor-pointer transition duration-300 ease-in-out ${
                  isRecording
                    ? 'animate-pulse bg-red-500'
                    : 'bg-green-200 hover:bg-green-300 '
                }`}
              >
                <Microphone size={20} color="#0F172A" weight="duotone" />
              </button>

              <button
                onClick={() => handleSendMessage()}
                className="bg-blue-200 size-10 grid place-content-center rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-blue-300"
              >
                <PaperPlaneRight size={20} color="#0F172A" weight="duotone" />
              </button>
            </div>
          </>
        ) : (
          <Chat.Start />
        )}
      </div>

      {bubble && <Bubble.Details bubble={bubble} />}
    </main>
  );
}
