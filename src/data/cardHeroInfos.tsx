import { CardProps } from '../interfaces/ComponentsInterfaces';
import { Users, Balloon, MagnifyingGlass } from 'phosphor-react';

export const cardHeroInfos: CardProps[] = [
  {
    icon: <Users size={24} color="#3b9b58" weight="duotone" />,
    title: 'Grupos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio velit dolorem nesciunt soluta fugit.',
    color: 'zinc-700',
  },
  {
    icon: <Balloon size={24} color="#c66271" weight="duotone" />,
    title: 'Eventos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio velit dolorem nesciunt soluta fugit.',
    color: 'zinc-700',
  },
  {
    icon: <MagnifyingGlass size={24} color="#9962c6" weight="duotone" />,
    title: 'Descubra',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio velit dolorem nesciunt soluta fugit.',
    color: 'zinc-700',
  },
];
