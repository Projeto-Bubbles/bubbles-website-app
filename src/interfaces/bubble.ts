import { ReactNode } from "react";

export interface Bubble {
  name: string;
  icon?: ReactNode;
  color?: string;
}
export interface EventProps {
  title: string;
  date: Date;
  bubble: Bubble;
}
