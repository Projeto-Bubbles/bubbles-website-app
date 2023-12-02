import {
  Atom,
  BookBookmark,
  Desktop,
  ForkKnife,
  GameController,
  MusicNotesSimple,
  Palette,
  SoccerBall,
} from 'phosphor-react';
import { Category } from '../enums/category';
import { BubbleProps } from '../interfaces/bubble';

export function bubbles(iconSize: number): BubbleProps[] {
  return [
    {
      name: 'Esportes',
      icon: <SoccerBall size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-amber-200',
      category: Category.SPORTS,
    },
    {
      name: 'Música',
      icon: (
        <MusicNotesSimple size={iconSize} color="#3f3f46" weight="duotone" />
      ),
      color: 'bg-violet-300',
      category: Category.MUSIC,
    },
    {
      name: 'Games',
      icon: <GameController size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-green-200',
      category: Category.GAME,
    },
    {
      name: 'Arte',
      icon: <Palette size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-fuchsia-200',
      category: Category.ART,
    },
    {
      name: 'Tecnologia',
      icon: <Desktop size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-teal-200',
      category: Category.TECHNOLOGY,
    },
    {
      name: 'Ciência',
      icon: <Atom size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-blue-200',
      category: Category.SCIENCE,
    },
    {
      name: 'Gastronomia',
      icon: <ForkKnife size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-orange-200',
      category: Category.CULINARY,
    },
    {
      name: 'Leitura',
      icon: <BookBookmark size={iconSize} color="#3f3f46" weight="duotone" />,
      color: 'bg-lime-200',
      category: Category.READING,
    },
  ];
}
