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

export const deletePost = (id: number) => {
  return api.delete(`/posts/${id}`);
};

export const editPost = (id: number, body: string) => {
  return api.patch(
    `/posts/${id}`,
    { contents: body },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
