import { useState } from 'react';
import { BubbleProps } from '../../../interfaces/bubble';

function BubbleTag({ icon, name, color, selected }: BubbleProps) {
  const [isSelected, setIsSelected] = useState(selected);

  return (
    <label
      onClick={() => setIsSelected(!isSelected)}
      className={`${
        isSelected ? color : 'bg-zinc-200'
      } flex justify-around items-center gap-2 p-1 px-3 rounded-md cursor-pointer transition duration-300 ease-in-out hover:brightness-90`}
    >
      {icon}
      <h4 className="lowercase text-zinc-700 font-medium">{name}</h4>
    </label>
  );
}

export default BubbleTag;
