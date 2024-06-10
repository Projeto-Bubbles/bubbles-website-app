import { format } from 'date-fns';
import {
  AppWindow,
  Calendar,
  CheckCircle,
  Clock,
  Link,
  MapPin,
} from 'phosphor-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { bubbles } from '../../../data/bubbles';
import { EventProps } from '../../../interfaces/bubble';
import { addUserToEvent, getLocalUser } from '../../../services/userServices';
import { Bubble } from '../Bubble';
import Button from '../Button';

function EventCard({
  idEvent,
  title,
  image,
  bubble,
  address,
  dateTime,
  link,
  platform,
}: EventProps) {
  const targetBubble = bubbles(12).find((b) => b.category === bubble?.category);

  const user: any = getLocalUser();

  const [isClicked, setIsClicked] = useState(false);

  const setPresenceInEvent = () => {
    const data = {
      idUser: Number(user.id),
      idEvent: idEvent!!,
    };

    toast.promise(
      addUserToEvent(data).then(() => setIsClicked(!isClicked)),
      {
        loading: 'Entrando no evento...',
        success: 'Participando do evento! ' + title,
        error: 'Não foi possível entrar no evento',
      }
    );
  };
  return (
    <>
      <div className="absolute w-screen h-screen -z-10">
        <Toaster />
      </div>

      <div className="bg-gray-200 w-4/4 rounded-2xl flex justify-start items-center gap-10">
        <div className="w-3/12 h-[280px] rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover transition duration-700 ease-in-outut hover:scale-125 hover:rotate-6"
            src={
              image ||
              `https://source.unsplash.com/random/500x500/?${bubble?.category}`
            }
            alt={title}
          />
        </div>

        <div className="w-7/12 h-full flex flex-col justify-between items-start py-6">
          <div className="w-full flex flex-col justify-between items-start leading-none gap-2">
            <div className="w-full flex justify-between items-center">
              <Bubble.Tag
                icon={targetBubble?.icon}
                title={targetBubble?.title ?? ''}
                color={targetBubble?.color}
                fixed
              />

              <h1 className="bg-slate-300/50 rounded-full flex justify-between items-center gap-2 px-2 pb-[0.1rem] font-semibold text-zinc-700 text-sm">
                {link ? 'online' : 'presencial'}
              </h1>
            </div>

            <div>
              <h1 className="font-bold text-2xl text-zinc-700 leading-none">
                {title}
              </h1>
              <h4 className="font-semibold text-lg text-zinc-500 leading-none">
                {bubble?.title}
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {link ? (
              <>
                <div className="bg-blue-200/70 rounded-full flex justify-between items-center gap-1 px-2 font-semibold text-zinc-700">
                  <Link size={12} color="#71717A" weight="duotone" />
                  <a href={link} target="_blank">
                    Link
                  </a>
                </div>

                <div className="bg-zinc-300/70 rounded-full flex justify-between items-center gap-1 px-2 text-sm font-semibold text-zinc-700">
                  <AppWindow size={12} color="#71717A" weight="duotone" />
                  {platform}
                </div>
              </>
            ) : (
              <div className="bg-zinc-300/70 rounded-full flex justify-between items-center gap-1 px-2 text-sm font-semibold text-zinc-700 leading-none">
                <MapPin size={12} color="#71717A" weight="duotone" />
                {address?.street}
              </div>
            )}

            <div className="bg-zinc-300/70 rounded-full flex justify-between items-center gap-1 px-2 text-sm font-semibold text-zinc-700">
              <Calendar size={12} color="#71717A" weight="duotone" />
              {format(new Date(dateTime), 'dd/MM')}
            </div>

            <div className="bg-zinc-300/70 rounded-full flex justify-between items-center  gap-1 px-2 text-sm font-semibold text-zinc-700">
              <Clock size={12} color="#71717A" weight="duotone" />
              {format(new Date(dateTime), 'HH:mm')}
            </div>
          </div>

          <Button
            onClick={() => setPresenceInEvent()}
            text={isClicked ? '' : 'MARCAR PRESENÇA'}
            color={isClicked ? 'bg-green-500' : 'bg-zinc-300'}
            icon={
              isClicked && (
                <CheckCircle size={16} color="#F1F5F9" weight="duotone" />
              )
            }
          />
        </div>
      </div>
    </>
  );
}

export default EventCard;
