import { bubbles } from '../../../data/bubbles';
import useBubbles from '../../../hooks/useBubbles';
import { BubbleProps } from '../../../interfaces/bubble';
import { Bubble } from '../Bubble';

function SignSelectionBubbles() {
  const bubblesList = bubbles(12);

  const userBubbles: BubbleProps[] = JSON.parse(
    localStorage.getItem('bubbles') || '[]'
  );

  const { toggleBubble } = useBubbles(userBubbles);

  return (
    <div className="w-full flex flex-col justify-center items-start gap-4">
      <h2 className="text-zinc-500 text-xl font-semibold">
        Selecione suas bolhas
      </h2>

      <div className="w-full flex flex-wrap gap-2">
        {bubblesList.map((bubble, index) => (
          <div key={index} onClick={() => toggleBubble(bubble)}>
            <Bubble.Tag
              icon={bubble.icon}
              name={bubble.name}
              color={bubble.color}
              selected={userBubbles.some((b) => b.name === bubble.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SignSelectionBubbles;
