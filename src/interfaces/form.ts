import { UserProps } from './user';

export interface FormProps {
  data?: UserProps;
  updateFieldHandler: (key: string, value: any) => void;
}
