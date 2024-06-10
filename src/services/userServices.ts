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

export const getBubblesForUser = (userId: number) => {
  return api.get(`/members/user/${userId}`);
};

export const addUserToBubble = (userId: number, bubbleId: number) => {
  return api.post(`/members/user/${userId}/bubble/${bubbleId}`);
};

export const getEventsForUser = (userId: number) => {
  return api.get(`/participation/${userId}`);
};

export const addUserToEvent = (data: { idUser: number; idEvent: number }) => {
  return api.post('/participation/create', data);
};

export const createUser = (data: any) => {
  return api.post('/users', data);
};
