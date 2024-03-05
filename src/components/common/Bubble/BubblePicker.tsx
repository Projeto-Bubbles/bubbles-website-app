import { useState } from 'react';
import { BubbleProps } from '../../../interfaces/bubble';

function BubblePicker({ color, title, icon, selected }: BubbleProps) {
  const [isClicked, setIsClicked] = useState(selected);

  const setBaseColor = () => {
    return isClicked
      ? color + ' border-slate-700 border-1 hover:' + color
      : 'bg-slate-200 hover:bg-slate-300';
  };

  const setIconBaseColor = () => {
    return isClicked ? 'bg-slate-100/50' : color;
  };

  return (
    <div
      className={`h-52 flex flex-col justify-between items-center rounded-md p-6 transition duration-200 ease-out cursor-pointer ${setBaseColor()} transition duration-300 ease-out`}
      onClick={() => setIsClicked(!isClicked)}
    >
      <div
        className={`w-28 h-28 grid place-content-center ${setIconBaseColor()} rounded-full transition duration-300 ease-out`}
      >
        {icon}
      </div>
      <h2 className="text-zinc-700 text-xl font-semibold">{title}</h2>
    </div>
  );
}

export default BubblePicker;
