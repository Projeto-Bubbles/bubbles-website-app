import { Users } from 'phosphor-react';
import { Bubble } from '.';
import { bubbles } from '../../../data/bubbles';
import { BubbleProps } from '../../../interfaces/bubble';

function BubbleCard(bubble: BubbleProps) {
  const targetBubble = bubbles(12).find((b) => b.category === bubble.category);

  const bubbleInfo = {
    ...bubble,
    icon: targetBubble?.icon,
    color: targetBubble?.color,
    category: targetBubble?.name,
  };

  return (
    <div className="w-72 h-68 bg-zinc-200 text-zinc-700 rounded-lg flex flex-col justify-between items-center group mb-6">
      <div className="w-full h-3/5 flex flex-col justify-start items-center p-6 gap-6">
        <div className="w-full flex justify-between items-center">
          <Bubble.Tag
            icon={bubbleInfo.icon}
            name={bubbleInfo.category ?? ''}
            color={bubbleInfo.color}
            fixed
          />
          <div className="w-14 flex justify-end items-center gap-2">
            <Users size={16} color="#423F46" weight="duotone" />
            <span className="font-bold">{bubble.users}k</span>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start items-start gap-2 h-[full">
          <h1 className="font-bold text-xl leading-none">{bubble.name}</h1>
          <p className="text-base font-medium leading-none">
            {bubble.description}
          </p>
        </div>
      </div>

      <div className="w-full h-[100px] flex justify-center items-center relative overflow-hidden translate-y-5">
        <button className="bg-slate-400/70 font-bold uppercase backdrop-blur-lg flex justify-around items-center rounded-full p-1 translate-x-52 absolute transition duration-300 ease-in-out group-hover:translate-x-28">
          Entrar
        </button>
        <img
          src={bubble.image}
          alt={bubble.name}
          className="w-full h-full object-cover object-center rounded-[40px]"
        />
      </div>
    </div>
  );
}

export default BubbleCard;
