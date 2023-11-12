import { ReactNode } from 'react';

export interface BubbleProps {
  name: string;
  icon?: ReactNode;
  color?: string;
}
export interface EventProps {
  title: string;
  date: Date;
  link?: string;
  image: string;
  // address?: Address
  bubble: BubbleProps;
}
