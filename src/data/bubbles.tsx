import {
  Atom,
  CoatHanger,
  Desktop,
  ForkKnife,
  MusicNotesSimple,
  Palette,
  SoccerBall,
  BookBookmark,
  GameController,
} from 'phosphor-react';
import { BubbleProps } from '../interfaces/bubble';

  export function bubbles(iconSize: number): BubbleProps[] {
  return [
    {
      name: 'Esportes',
      icon: <SoccerBall size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-amber-200',
      selected: true,
    },
    {
      name: 'Música',
      icon: (
        <MusicNotesSimple size={iconSize} color="#3f3f46" weight="duotone" />
      ),
      color: 'bg-violet-300',
    },
    {
      name: 'Games',
      icon: <GameController size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-green-200',
      selected: true,
    },
    {
      name: 'Arte',
      icon: <Palette size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-fuchsia-200',
      selected: true,
    },
    {
      name: 'Tecnologia',
      icon: <Desktop size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-teal-200',
    },
    {
      name: 'Ciência',
      icon: <Atom size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-blue-200',
    },
    {
      name: 'Gastronomia',
      icon: <ForkKnife size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-orange-200',
    },
    {
      name: 'Leitura',
      icon: <BookBookmark size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-lime-200',
    },
  ];
}
