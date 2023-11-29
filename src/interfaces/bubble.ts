import { ReactNode } from 'react';
import { Category } from '../enums/category';

export interface BubbleProps {
  name: string;
  icon?: ReactNode;
  color?: string;
  selected?: boolean;
  fixed?: boolean;
  category?: Category;
}
export interface EventProps {
  title: string;
  date: Date;
  link?: string;
  image: string;
  // address?: Address
  bubble: BubbleProps;
}
