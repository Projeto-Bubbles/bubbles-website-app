import { api } from '../utils/axios';

export const registerUser = (data: any) => {
  return api.post('/auth/register', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const loginUser = (data: any) => {
  return api.post('/auth/login', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
