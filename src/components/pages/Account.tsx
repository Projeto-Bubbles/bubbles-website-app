import { Calendar, ChatTeardrop, CheckCircle, User } from 'phosphor-react';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { bubbles } from '../../data/bubbles';
import { BubbleProps, EventProps } from '../../interfaces/bubble';
import { getBubbles } from '../../services/bubbleServices';
import { getEvents } from '../../services/eventServices';
import { AccountCard } from '../common/AccountCard';
import { Bubble } from '../common/Bubble';
import Navbar from '../common/Navbar';
import Profile from '../common/Profile';
import { HorizontalCard } from './../common/HorizontalCard';

function Account() {
  const [contentAboutMe, setContentAboutMe] = useState(() => {
    return localStorage.getItem('contentAboutMe') ?? '';
  });

  const [userBubbles, setUserBubbles] = useState<BubbleProps[]>([]);
  const [userEvents, setUserEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    getBubbles().then((response: any) => {
      setUserBubbles(response.data);
    });

    getEvents().then((response: any) => {
      setUserEvents(response.data);
    });
  }, []);

  const [isTextAreaDisable, setIsTextAreaDisable] = useState(true);

  const bubblesLocal: BubbleProps[] = JSON.parse(
    localStorage.getItem('bubbles') ?? '[]'
  );

  const interests: BubbleProps[] = bubbles(16).filter((bubble) =>
    bubblesLocal.map((b) => b.category).includes(bubble.category)
  );

  const handleContentAboutMe = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContentAboutMe(event.target.value);
  };

  const onSaveAboutMe = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      localStorage.setItem('contentAboutMe', contentAboutMe);

      setIsTextAreaDisable(true);

      toast.success('"Sobre mim" atualizado com sucesso!', {
        icon: <CheckCircle size={16} color="#4d9d4f" weight="duotone" />,
      });
    }
  };

  const enableTextArea = () => {
    setIsTextAreaDisable(false);
  };

  return (
    <>
      <Toaster />

      <Navbar />

      <main className="min-h-screen bg-cover flex justify-center items-start pb-20">
        <div className="mt-24 w-3/4 flex flex-col items-center gap-10">
          <Profile />

          <div className="w-full bg-red grid grid-cols-1 lg:grid-cols-[27%_37%_30%] gap-[3%] ">
            <AccountCard
              editAboutMe
              onEnableTextArea={enableTextArea}
              title="Sobre mim"
              icon={<User size={16} color="#F1F5F9" weight="duotone" />}
              background="bg-slate-900"
            >
              <div className="w-full min-h-[120px]">
                <textarea
                  disabled={isTextAreaDisable}
                  maxLength={200}
                  className="w-full h-[120px] text-slate-100 bg-none border-none outline-none resize-none"
                  value={contentAboutMe}
                  onChange={handleContentAboutMe}
                  onKeyDown={onSaveAboutMe}
                />
              </div>
              <div className="w-full h-[1px] bg-slate-800 rounded-full" />

              <div className="w-full flex flex-col items-start justify-start gap-4">
                <h2 className="font-bold text-xl text-slate-400">Interesses</h2>

                <div className="w-full flex flex-wrap items-start justify-start gap-4">
                  {interests.map((interest) => (
                    <Bubble.Tag
                      key={interest.title}
                      title={interest.title}
                      color={interest.color}
                      icon={interest.icon}
                      fixed
                    />
                  ))}
                </div>
              </div>
            </AccountCard>

            <AccountCard
              title="Eventos próximos"
              icon={<Calendar size={16} color="#423F46" weight="duotone" />}
              background="bg-zinc-300"
            >
              {userEvents.map((event) => (
                <HorizontalCard
                  key={event.idEvent}
                  image={`https://picsum.photos/id/${Math.floor(
                    Math.random() * 100
                  ).toString()}/200/300`}
                  event={event}
                />
              ))}
            </AccountCard>

            <AccountCard
              title="Bolhas"
              icon={<ChatTeardrop size={16} color="#423F46" weight="duotone" />}
              background="bg-zinc-300"
            >
              {userBubbles.map((bubble) => (
                <HorizontalCard
                  key={bubble.idBubble}
                  image={`https://picsum.photos/id/${Math.floor(
                    Math.random() * 100
                  ).toString()}/200/300`}
                  bubble={bubble}
                />
              ))}
            </AccountCard>
          </div>
        </div>
      </main>
    </>
  );
}

export default Account;