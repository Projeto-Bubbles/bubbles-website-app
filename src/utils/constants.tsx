import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from 'phosphor-react';
import { ReactNode } from 'react';

export const socialLinks: string[] = ['#', '#', '#', '#'];

export const icons: ReactNode[] = [
  <LinkedinLogo size={16} color="#3f3f46" weight="duotone" />,
  <InstagramLogo size={16} color="#3f3f46" weight="duotone" />,
  <GithubLogo size={16} color="#3f3f46" weight="duotone" />,
  <EnvelopeSimple size={16} color="#3f3f46" weight="duotone" />,
];