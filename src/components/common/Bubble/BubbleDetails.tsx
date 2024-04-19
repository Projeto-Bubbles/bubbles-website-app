import { Calendar, UsersFour } from 'phosphor-react';
import { Bubble } from '.';
import { BubbleInfo } from './BubbleInfo';

const bubbleInfos: BubbleInfo[] = [
  {
    icon: <UsersFour size={20} color="#bfdbfe" weight="duotone" />,
    title: 'Usuários',
    insight: 16987897987,
  },
  {
    icon: <Calendar size={20} color="#bfdbfe" weight="duotone" />,
    title: 'Eventos',
    insight: 3,
  },
];

export function BubbleDetails() {
  return (
    <aside className="bg-slate-950 text-slate-100 flex flex-col items-start justify-start gap-6">
      <div className="w-full bg-red-500 h-48 rounded-b-2xl">
        <img src="" alt="" />
      </div>

      <div className="flex flex-col items-start justify-start gap-6 px-8">
        <div className="w-full flex flex-col items-start justify-between gap-2">
          <h1 className="text-2xl font-bold">Nome da bolha</h1>
          <p className="text-base font-normal leading-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            dolore, rerum officia doloribus error nesciunt molestias quas,
            cumque.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 gap-4">
          {bubbleInfos.map((bubble) => (
            <Bubble.Info
              icon={bubble.icon}
              title={bubble.title}
              insight={bubble.insight}
            />
          ))}
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-4 max-h-64 overflow-y-auto scrollbar-hide">
          <Bubble.User name="Ronaldo" />
          <Bubble.User name="Ronaldo" />
          <Bubble.User name="Ronaldo" />
          <Bubble.User name="Ronaldo" />
          <Bubble.User name="Ronaldo" />
          <Bubble.User name="Ronaldo" />
          <Bubble.User name="Ronaldo" />
        </div>
      </div>
    </aside>
  );
}
