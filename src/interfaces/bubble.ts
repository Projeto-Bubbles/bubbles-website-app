import { ReactNode } from 'react';
import { Category } from '../enums/category';
import { Address, UserProps } from './user';

export interface BubbleProps {
  id?: number;
  name: string;
  image?: string;
  description?: string;
  icon?: ReactNode;
  color?: string;
  category?: Category;
  users?: number;
  fixed?: boolean;
  selected?: boolean;
  creator?: UserProps;
}
export interface EventProps {
  id?: number;
  title: string;
  dateTime: Date;
  duration: number;
  author?: {
    id: number;
  };
  bubble?: BubbleProps;
  publicPlace?: boolean;
  peopleCapacity?: number;
  address?: Address;
  platform?: string;
  url?: string;
  image?: string;
  children?: ReactNode;
}
