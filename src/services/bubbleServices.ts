import { Category } from '../enums/category';
import { api } from '../utils/axios';

export const getFilteredBubbles = (categories: (Category | undefined)[]) => {
  const params = new URLSearchParams();
  categories.forEach((category) => {
    params.append('bubbleCategories', category!!);
  });
  return api.get(`/bubbles/categories?${params.toString()}`);
};

export const getBubbles = (): any => {
  return api.get('/bubbles');
};

export const createBubble = (bubble: any) => {
  return api.post('/bubbles/create', bubble);
};

export const deleteBubble = (id: number) => {
  return api.delete(`/bubbles/${id}`);
};

export const editBubble = (id: number, body: string) => {
  return api.patch(`/bubbles/update/${id}`, { title: body });
};
