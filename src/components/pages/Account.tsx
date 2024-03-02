import { Calendar, ChatTeardrop, User } from 'phosphor-react';
import { bubbles } from '../../data/bubbles';
import { BubbleProps } from '../../interfaces/bubble';
import { AccountCard } from '../common/AccountCard';
import { Bubble } from '../common/Bubble';
import Navbar from '../common/Navbar';
import Profile from '../common/Profile';
import { HorizontalCard } from './../common/HorizontalCard';

function Account() {
  const bubblesLocal: BubbleProps[] = JSON.parse(
    localStorage.getItem('bubbles') ?? '[]'
  );

  const interests: BubbleProps[] = bubbles(16).filter((bubble) =>
    bubblesLocal.map((b) => b.category).includes(bubble.category)
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-cover flex justify-center items-start pb-20">
        <div className="mt-24 w-3/4 flex flex-col items-center gap-10">
          <Profile />

          <div className="w-full bg-red grid grid-cols-1 lg:grid-cols-[27%_37%_30%] gap-[3%] ">
            <AccountCard
              title="Sobre mim"
              icon={<User size={16} color="#F1F5F9" weight="duotone" />}
              background="bg-slate-900"
            >
              <p className="text-slate-100 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                officia voluptate laboriosam reiciendis, qui facere. Nesciunt
              </p>

              <div className="w-full h-[1px] bg-slate-800 rounded-full" />

              <div className="w-full flex flex-col items-start justify-start gap-4">
                <h2 className="font-bold text-xl text-slate-400">Interesses</h2>

                <div className="w-full flex flex-wrap items-start justify-start gap-4">
                  {interests.map((interest) => (
                    <Bubble.Tag
                      key={interest.name}
                      name={interest.name}
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
              <HorizontalCard
                image={`https://picsum.photos/id/${Math.floor(
                  Math.random() * 100
                ).toString()}/200/300`}
                bubble={bubbles(16)[2]}
              />
            </AccountCard>

            <AccountCard
              title="Bolhas"
              icon={<ChatTeardrop size={16} color="#423F46" weight="duotone" />}
              background="bg-zinc-300"
            >
              <HorizontalCard
                image={`https://picsum.photos/id/${Math.floor(
                  Math.random() * 100
                ).toString()}/200/300`}
                bubble={bubbles(16)[2]}
              />
            </AccountCard>
          </div>
        </div>
      </main>
    </>
  );
}

export default Account;
