import { BubbleProps } from '../interfaces/bubble';
import { UserProps } from '../interfaces/user';
import { api } from '../utils/axios';

export const getUserByEmail = (email: string) => {
  return api.get('/users/email', { params: { email } });
};

export const getLocalUser = () => {
  const user: UserProps = JSON.parse(localStorage.getItem('user') ?? '[]');

  return user;
};

export const getInterests = (): number => {
  const interests: BubbleProps[] = JSON.parse(
    localStorage.getItem('bubbles') ?? '[]'
  );

  return interests.length;
};

export const createUser = (data: any) => {
  return api.post('/users', data);
};
