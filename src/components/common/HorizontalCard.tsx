import { format } from 'date-fns';
import { Users } from 'phosphor-react';
import { bubbles } from '../../data/bubbles';
import { BubbleProps } from '../../interfaces/bubble';
import { Bubble } from './Bubble';

interface HorizontalCardProps {
  bubble?: BubbleProps;
  event?: any;
  image: string;
}

export function HorizontalCard({ bubble, event, image }: HorizontalCardProps) {
  const bubbleTag: BubbleProps | undefined = bubbles(12).find(
    (b) => b.category === bubble?.category
  );

  return (
    <div className="flex justify-start items-center gap-8 w-full min-h-24 max-h-28 bg-slate-100 text-zinc-700 rounded-xl leading-none">
      <div className="w-2/5 h-full rounded-l-md overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={bubble?.title || event?.event.title}
        />
      </div>

      <div className="w-full h-full flex flex-col items-start justify-center gap-2">
        {event?.event.title ? (
          <h3 className="font-semibold text-sm text-zinc-600 leading-none">
            {event?.event.bubbleName}
          </h3>
        ) : (
          <Bubble.Tag
            title={bubbleTag?.title!!}
            icon={bubbleTag?.icon!!}
            color={bubbleTag?.color!!}
            fixed
          />
        )}

        <h1 className="font-bold text-lg text-zinc-700 leading-none">
          {bubble?.title || event?.event.title}
        </h1>

        {event?.event.moment ? (
          <div className="w-full flex items-center justify-start gap-2 text-zinc-700 font-bold text-sm">
            <span>{format(new Date(event.event.moment), 'dd/MM')}</span>
            <div className="size-1 bg-zinc-400 rounded-full" />
            <span>{format(new Date(event.event.moment), 'HH:mm')}</span>
            <div className="size-1 bg-zinc-400 rounded-full" />
            <span>{event.url ? 'online' : 'presencial'}</span>
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
