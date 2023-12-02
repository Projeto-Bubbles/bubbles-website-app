import { User } from './user';

export interface FormProps {
  data?: User;
  updateFieldHandler: (key: string, value: any) => void;
}
