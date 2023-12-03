import { BubbleProps } from './bubble';

type CPF = string & { length: 11 };

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  cpf: CPF;
  dateBirthday: string;
  bubbles: BubbleProps[];
  address: Address;
}

interface Address {
  cep: string;
}
