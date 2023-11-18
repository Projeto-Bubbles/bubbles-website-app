import { bubbles } from '../../../data/bubbles';
import { Bubble } from '../Bubble';

function SignSelectionBubbles() {
  const bubblesList = bubbles(12);

  return (
    <div className='w-full flex flex-col justify-center items-start gap-4'>
      <h2 className='text-zinc-500 text-xl font-semibold'> Selecione suas bolhas </h2>
      <div className="w-full flex flex-wrap gap-2">
        {bubblesList.map((bubble) => (
          <Bubble.Tag
            icon={bubble.icon}
            name={bubble.name}
            color={bubble.color}
            selected={bubble.selected}
          />
        ))}
      </div>
    </div>
  );
}

export default SignSelectionBubbles;
