import { ReactNode } from 'react';

export interface ButtonProps {
  text: string;
  color: string;
  icon?: ReactNode;
  isLight?: boolean;
  onClick?: () => void;
}

export interface Bubble {
  name: string;
  icon?: ReactNode;
  color?: string;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  color: string;
}

export interface MemberProps {
  photo: string;
  name: string;
  lastName: string;
  role: string;
  social: {
    linkedin: string;
    instagram: string;
    github: string;
    email: string;
  };
}

export interface SidebarTopicProps {
  icon: ReactNode;
  text: string;
  isLogout?: boolean;
}

export interface SocialButtonProps {
  icon: ReactNode;
  link: string;
}
