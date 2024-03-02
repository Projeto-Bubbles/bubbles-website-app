import { format } from 'date-fns';
import { Users } from 'phosphor-react';
import { bubbles } from '../../data/bubbles';
import { BubbleProps, EventProps } from '../../interfaces/bubble';
import { Bubble } from './Bubble';

interface HorizontalCardProps {
  bubble?: BubbleProps;
  event?: EventProps;
  image: string;
}

export function HorizontalCard({ bubble, event, image }: HorizontalCardProps) {
  const bubbleTag: BubbleProps[] = bubbles(16).filter(
    (b) => b.category === bubble?.category
  );

  const date = Date.now();

  return (
    <div className="flex justify-start items-center gap-8 w-full min-h-20 max-h-24 bg-slate-100 text-zinc-700 rounded-md leading-none">
      <div className="w-2/5 h-full rounded-l-md overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={bubble?.name || event?.title}
        />
      </div>

      <div className="w-full h-full flex flex-col items-start justify-center gap-1">
        {event?.title ? (
          <h3 className="font-semibold text-lg text-zinc-600">
            {bubble?.name}
          </h3>
        ) : (
          <Bubble.Tag
            name={bubbleTag[0].name}
            icon={bubbleTag[0].icon}
            color={bubbleTag[0].color}
            fixed
          />
        )}

        <h1 className="font-bold text-xl text-zinc-700">
          {bubble?.name || event?.title}
        </h1>

        {event?.dateTime ? (
          <div className="w-full flex items-center justify-start gap-4 text-zinc-700 font-bold text-normal">
            <span>{format(new Date(event.dateTime), 'dd/MM')}</span>
            <div className="w-[1.5px] h-full bg-zinc-300 rounded-full" />
            <span>{format(new Date(event.dateTime), 'HH:mm')}</span>
            <div className="w-[1.5px] h-full bg-zinc-300 rounded-full" />
            {/* <span>{event.url ? 'online' : 'presencial'}</span> */}
          </div>
        ) : (
          <div className="w-full flex items-end justify-start gap-1">
            <Users size={12} color="#423f46" weight="duotone" />

            <p className="leading-none text-zinc-700 text-xs font-bold">23k</p>
          </div>
        )}
      </div>
    </div>
  );
}
