import { BubbleProps } from '../../../interfaces/bubble';

function BubbleTag({ icon, name, color }: BubbleProps) {
  return (
    <label
      className={`${color} flex justify-around items-center gap-2 p-1 px-3 rounded-md cursor-pointer`}
    >
      {icon}
      <h4 className="lowercase text-zinc-700 font-medium">{name}</h4>
    </label>
  );
}

export default BubbleTag;
