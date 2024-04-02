import { useState } from 'react';
import { BubbleProps } from '../../../interfaces/bubble';

function BubbleTag({ icon, title, color, selected, fixed }: BubbleProps) {
  const [isSelected, setIsSelected] = useState(selected);

  return (
    <label
      onClick={() => !fixed && setIsSelected(!isSelected)}
      className={`${
        isSelected || fixed ? color : 'bg-zinc-200'
      } flex justify-around items-center gap-2 p-1 px-3 rounded-md transition duration-300 ease-in-out ${
        !fixed && 'hover:brightness-90 cursor-pointer'
      }`}
    >
      {icon}
      <h4 className="lowercase text-zinc-700 font-medium">{title}</h4>
    </label>
  );
}

export default BubbleTag;
