import { ReactNode } from 'react';
import { Category } from '../enums/category';

export interface BubbleProps {
  name: string;
  image?: string;
  description?: string;
  icon?: ReactNode;
  color?: string;
  category?: Category;
  users?: number;
  fixed?: boolean;
  selected?: boolean;
}
export interface EventProps {
  title: string;
  date: Date;
  link?: string;
  image: string;
  // address?: Address
  bubble: BubbleProps;
}
