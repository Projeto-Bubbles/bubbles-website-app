import { format } from 'date-fns';
import { AppWindow, Calendar, Link, MapPin, Timer } from 'phosphor-react';
import { bubbles } from '../../../data/bubbles';
import { EventProps } from '../../../interfaces/bubble';
import { Bubble } from '../Bubble';

function EventCard({
  title,
  bubble,
  address,
  image,
  date,
  url,
  platform,
  children,
}: EventProps) {
  const targetBubble = bubbles(12).find((b) => b.category === bubble?.category);

  return (
    <div className="bg-gray-200 w-[400px] rounded-md flex justify-start items-center gap-10">
      <div className="w-3/12 h-[300px] rounded-half-r rounded-l-md overflow-hidden">
        <img
          className="w-full h-full object-cover transition duration-700 ease-in-outut hover:scale-125 hover:rotate-6"
          src={image}
          alt={title}
        />
      </div>

      <div className="w-7/12 h-full flex flex-col justify-between items-start py-10">
        <div className="w-full flex flex-col justify-between items-start leading-none gap-2">
          <div className="w-full flex justify-between items-center">
            <Bubble.Tag
              icon={targetBubble?.icon}
              name={targetBubble?.name ?? ''}
              color={targetBubble?.color}
              fixed
            />

            <h1 className="bg-slate-300/50 rounded-full flex justify-between items-center gap-2 px-2 font-semibold text-zinc-700 text-sm">
              {url ? 'online' : 'presencial'}
            </h1>
          </div>

          <div>
            <h1 className="font-bold text-2xl text-zinc-700 leading-none">
              {title}
            </h1>
            <h4 className="font-semibold text-xl text-zinc-500 leading-none">
              {bubble?.name}
            </h4>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {url ? (
            <>
              <div className="bg-blue-200/70 rounded-full flex justify-between items-center gap-2 px-2 font-semibold text-zinc-700">
                <Link size={12} color="#71717A" weight="duotone" />
                <a href={url}>Link</a>
              </div>

              <div className="bg-zinc-300/70 rounded-full flex justify-between items-center gap-2 px-2 font-semibold text-zinc-700">
                <AppWindow size={12} color="#71717A" weight="duotone" />
                {platform}
              </div>
            </>
          ) : (
            <div className="bg-zinc-300/70 rounded-full flex justify-between items-center gap-2 px-2 font-semibold text-zinc-700">
              <MapPin size={12} color="#71717A" weight="duotone" />
              {address?.street}
            </div>
          )}

          <div className="bg-zinc-300/70 rounded-full flex justify-between items-center gap-2 px-2 font-semibold text-zinc-700">
            <Calendar size={12} color="#71717A" weight="duotone" />
            {format(new Date(date), 'dd/MM')}
          </div>

          <div className="bg-zinc-300/70 rounded-full flex justify-between items-center  gap-2 px-2 font-semibold text-zinc-700">
            <Timer size={12} color="#71717A" weight="duotone" />
            {format(new Date(date), 'HH:mm')}
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

export default EventCard;
