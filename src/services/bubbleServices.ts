import { Category } from '../enums/category';
import { api } from '../utils/constants';

export const getFilteredBubbles = (categories: (Category | undefined)[]) => {
  const formattedCategories = categories.filter(Boolean).join(',');
  return api.get(`/bubbles/filtered?categories=${formattedCategories}`);
};
