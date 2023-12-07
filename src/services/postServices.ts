import { CommentProps, PostProps } from '../interfaces/post';
import { api } from '../utils/axios';

export const getPosts = () => {
  return api.get('/posts');
};

export const createPost = (body: PostProps) => {
  return api.post('/posts', body);
};

export const createComment = (body: CommentProps, postId: number) => {
  return api.post(`/posts/${postId}/comments`, body);
};
