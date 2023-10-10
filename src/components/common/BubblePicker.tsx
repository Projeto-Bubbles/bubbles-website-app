import { BubblePickerProps } from '../../interfaces/ComponentsInterfaces';
import { useState } from 'react';

function BubblePicker(props: BubblePickerProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    return !isClicked ? setIsClicked(true) : setIsClicked(false);
  };

  const setBaseColor = () => {
    return isClicked
      ? props.color + ' border-slate-700 border-1 hover:' + props.color
      : 'bg-slate-200 hover:bg-slate-300';
  };

  const setIconBaseColor = () => {
    return isClicked ? 'bg-slate-100/50' : props.color;
  };

  return (
    <div
      className={`h-52 flex flex-col justify-between items-center rounded-md p-6 transition duration-200 ease-out cursor-pointer ${setBaseColor()} transition duration-300 ease-out`}
      onClick={handleClick}
    >
      <div
        className={`w-28 h-28 grid place-content-center ${setIconBaseColor()} rounded-full transition duration-300 ease-out`}
      >
        {props.icon}
      </div>
      <h2 className="text-zinc-700 text-xl font-semibold">{props.name}</h2>
    </div>
  );
}

export default BubblePicker;
