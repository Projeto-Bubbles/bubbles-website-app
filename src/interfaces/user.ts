import { BubbleProps } from './bubble';

type CPF = string & { length: 11 };

export interface User {
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
