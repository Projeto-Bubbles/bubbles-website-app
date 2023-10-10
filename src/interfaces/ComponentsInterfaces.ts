import { ReactNode } from 'react';

export interface ButtonProps {
  text: string;
  color: string;
  icon?: ReactNode; // Permite que você passe um ícone como prop
}

export interface BubblePickerProps {
  name: string;
  icon: ReactNode;
  color: string;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
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

export interface SocialButtonProps {
  icon: ReactNode;
  link: string;
}
