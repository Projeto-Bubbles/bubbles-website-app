import { api } from '../utils/constants';

export const getPosts = () => {
  return api.get('/posts');
};

export const createPost = (body: any) => {};
