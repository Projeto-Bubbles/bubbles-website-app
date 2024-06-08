import { Category } from '../enums/category';
import { api } from '../utils/axios';

export const getFilteredEvents = (categories: (Category | undefined)[]) => {
  const formattedCategories = categories.filter(Boolean).join(',');

  return categories
    ? api.get(`/events/filtered?categories=${formattedCategories}`)
    : api.get('/events');
};

export const getEvents = () => {
  return api.get('events');
};

export const createOnlineEvent = (event: any) => {
  console.log('Evento no create:', event)
  return api.post('/events/online', event);
};

export const createInPersonEvent = (event: any) => {
  console.log('Evento no create:', event)
  return api.post('/events/inPerson', event);
};
