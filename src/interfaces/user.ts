import { BubbleProps } from './bubble';

type CPF = string & { length: 11 };

export interface UserProps {
  idUser: number;
  username: string;
  email: string;
  cpf?: CPF;
  nickname: string;
  password?: string;
  dateBirthday?: string;
  bubbles?: BubbleProps[];
  address?: Address;
}

export interface Address {
  id: number;
  cep: string;
  country: string;
  estate: string;
  city: string;
  neighborhood: string;
  street: string;
  houseNumber: string;
}
