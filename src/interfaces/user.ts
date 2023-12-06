import { BubbleProps } from './bubble';

type CPF = string & { length: 11 };

export interface User {
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

interface Address {
  cep: string;
}
