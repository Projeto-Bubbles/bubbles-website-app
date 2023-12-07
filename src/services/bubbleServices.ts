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
