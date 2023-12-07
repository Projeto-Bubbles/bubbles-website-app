import { api } from '../utils/constants';

export const getUserByEmail = (email: string) => {
  return api.get('/users/email', { params: { email } });
};

export const createUser = (data: any) => {
  return api.post('/users', data);
};
