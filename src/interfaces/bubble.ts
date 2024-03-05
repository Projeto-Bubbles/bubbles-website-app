import { ReactNode } from 'react';
import { Category } from '../enums/category';
import { Address, UserProps } from './user';

export interface BubbleProps {
  id?: number;
  title: string;
  explanation?: string;
  creationDate?: Date;
  image?: string;
  category?: Category;
  creator?: UserProps;
  icon?: ReactNode;
  color?: string;
  users?: number;
  fixed?: boolean;
  selected?: boolean;
}
export interface EventProps {
  idEvent?: number;
  title: string;
  dateTime: Date;
  duration: number;
  organizer?: UserProps;
  bubble?: BubbleProps;
  publicPlace?: boolean;
  peopleCapacity?: number;
  address?: Address;
  platform?: string;
  link?: string;
  image?: string;
  children?: ReactNode;
}
