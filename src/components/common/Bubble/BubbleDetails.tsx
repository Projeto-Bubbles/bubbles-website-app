import { Calendar, UsersFour } from 'phosphor-react';
import { Bubble } from '.';
import { BubbleProps } from '../../../interfaces/bubble';
import { BubbleInfo } from './BubbleInfo';

interface BubbleDetailsProps {
  bubble: BubbleProps;
}

const bubbleInfos: BubbleInfo[] = [
  {
    icon: <UsersFour size={20} color="#bfdbfe" weight="duotone" />,
    title: 'Usuários',
    insight: 22,
  },
  {
    icon: <Calendar size={20} color="#bfdbfe" weight="duotone" />,
    title: 'Eventos',
    insight: 3,
  },
];

export function BubbleDetails({ bubble }: BubbleDetailsProps) {
  console.log('👽 ~ bubble:', bubble);
  return (
    <aside className="bg-slate-950 text-slate-100 flex flex-col items-start justify-start gap-6">
      <div className="w-full bg-red-500 h-48 rounded-b-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={bubble.image}
          alt="Capa da bolha"
        />
      </div>

      <div className="w-full flex flex-col items-start justify-start gap-6 px-8">
        <div className="w-full flex flex-col items-start justify-between gap-2">
          <h1 className="text-2xl font-bold">{bubble.title}</h1>
          <p className="text-base font-normal leading-none">
            {bubble.explanation}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 gap-4">
          {bubbleInfos.map((bubble, index) => (
            <Bubble.Info
              key={index}
              icon={bubble.icon}
              title={bubble.title}
              insight={bubble.insight}
            />
          ))}
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-4 max-h-72 overflow-y-auto scrollbar-hide">
          <Bubble.User name="Chola" />
          <Bubble.User name="Arnaldo Sacomani" />
          <Bubble.User name="Vinicius" />
          <Bubble.User name="Caramico" />
          <Bubble.User name="Freeza" />
          <Bubble.User name="Ronaldo" />
          <Bubble.User name="Ronaldo" />
        </div>
      </div>
    </aside>
  );
}
