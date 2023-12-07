import { BubbleProps } from './bubble';

type CPF = string & { length: 11 };

export interface UserProps {
  id: number;
  name: string;
  email: string;
  cpf: CPF;
  username: string;
  password: string;
  dateBirthday: string;
  bubbles: BubbleProps[];
  address: Address;
}

export interface Address {
  id: number;
  cep: string;
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
}
