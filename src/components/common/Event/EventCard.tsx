import { CheckCircle } from 'phosphor-react';
import Button from '../Button';
import { ReactNode, useState } from 'react';

function EventCard(props: any) {
  const [isCheckIcon, setCheckIcon] = useState<ReactNode>(null);

  const setPresenceInEvent = () => {
    console.log(isCheckIcon);

    return setCheckIcon(!isCheckIcon);
  };

  return (
    <div className="bg-gray-200 w-[480px] rounded-md flex justify-start items-center gap-10">
      <div className="w-3/12 h-[280px] rounded-half-r overflow-hidden">
        <img
          className="w-full h-full object-cover transition duration-700 ease-in-outut hover:scale-125 hover:rotate-6"
          src={props.image}
          alt={props.title}
        />
      </div>

      <div className="w-7/12 h-56 flex flex-col justify-between items-start ">
        <div className="flex flex-col justify-between items-start leading-none">
          <span className="text-sm text-zinc-700">{props.category}</span>
          <h1 className="font-bold text-3xl text-zinc-700"> {props.title} </h1>
          <h4 className="font-semibold text-xl text-zinc-500">
            {props.bubble.name}{' '}
          </h4>
        </div>

        <div className="grid grid-rows-2">
          <div className="bg-zinc-300/70 rounded-full px-2 font-semibold text-zinc-700">
            {props.address}
          </div>
        </div>

        <Button
          onClick={() => setPresenceInEvent()}
          text={isCheckIcon ? '' : 'MARCAR PRESENÇA'}
          color={isCheckIcon ? 'bg-green-500' : 'bg-zinc-300'}
          icon={
            isCheckIcon ? (
              <CheckCircle size={16} color="#F1F5F9" weight="duotone" />
            ) : null
          }
        />
      </div>
    </div>
  );
}

export default EventCard;
