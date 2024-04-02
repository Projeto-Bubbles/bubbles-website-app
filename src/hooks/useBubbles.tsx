import { useEffect, useState } from 'react';
import { BubbleProps } from '../interfaces/bubble';

function useBubbles(userBubbles?: BubbleProps[]) {
  const [selectedBubbles, setSelectedBubbles] = useState<BubbleProps[]>(
    userBubbles ?? []
  );

  useEffect(() => {
    console.log(selectedBubbles);
  }, [selectedBubbles]);

  const toggleBubble = (bubble: BubbleProps) => {
    if (selectedBubbles.some((b) => b.title === bubble.title)) {
      setSelectedBubbles(
        selectedBubbles.filter((element) => element.title !== bubble.title)
      );
    } else {
      setSelectedBubbles([...selectedBubbles, bubble]);
    }
  };

  const sanitizedBubbles = selectedBubbles.map(
    ({ title, category, color, selected }) => ({
      title,
      category,
      color,
      selected,
    })
  );

  localStorage.setItem('bubbles', JSON.stringify(sanitizedBubbles));

  // Adicionando um iterador vazio
  const iterator = {
    [Symbol.iterator]: function* () {
      // Iterador vazio
      yield;
    },
  };

  return {
    selectedBubbles,
    toggleBubble,
    ...iterator, // Adicionando o iterador ao objeto retornado
  };
}

export default useBubbles;
