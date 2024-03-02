import { Category } from '../enums/category';
import { api } from '../utils/axios';

export const getFilteredBubbles = (categories: (Category | undefined)[]) => {
  const formattedCategories = categories.filter(Boolean).join(',');
  return api.get(`/bubbles/filtered?categories=${formattedCategories}`);
};

export const getBubbles = () => {
  return api.get('/bubbles');
};

export const createBubble = (bubble: any) => {
  return api.post('/bubbles', bubble);
};

export const deleteBubble = (id: number) => {
  return api.delete(`/bubbles/${id}`);
};

export const editBubble = (id: number, body: string) => {
  return api.patch(
    `/bubbles/edit/${id}`,
    { name: body },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
