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
    if (selectedBubbles.some((b) => b.name === bubble.name)) {
      setSelectedBubbles(
        selectedBubbles.filter((element) => element.name !== bubble.name)
      );
    } else {
      setSelectedBubbles([...selectedBubbles, bubble]);
    }
  };

  const sanitizedBubbles = selectedBubbles.map(({ name, color, selected }) => ({
    name,
    color,
    selected,
  }));

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
