import { api } from '../utils/axios';

export const loginUser = (data: any) => {
  return api.post('/auth/login', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
