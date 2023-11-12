import { CommentProps, PostProps } from '../interfaces/post';
import { api } from '../utils/constants';

export const getPosts = () => {
  return api.get('/posts');
};

export const createPost = (body: PostProps) => {
  return api.post('/posts', body);
};

export const createComment = (body: CommentProps) => {
  return api.post('/comments', body);
};
