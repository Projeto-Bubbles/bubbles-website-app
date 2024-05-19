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
  return api.get(`/members/user/1`);
};

export const addUserToBubble = (userId: number, bubbleId: number) => {
  return api.post(`/members/user/${userId}/bubble/${bubbleId}`);
};

export const getEventsForUser = (userId: number) => {
  return api.get(`/participation/1`);
};

export const addUserToEvent = (userId: number, eventId: number) => {
  return api.post(`/participation/${userId}/event/${eventId}`);
};

export const createUser = (data: any) => {
  return api.post('/users', data);
};
