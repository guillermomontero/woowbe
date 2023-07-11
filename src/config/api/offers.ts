import { apiCallGET } from './controller';

export const apiOffers = async () => {
  return await apiCallGET('/offers/public/');
};

export const apiBusinessId = async (id: number = 0) => {
  return await apiCallGET(`/offers/public/${id}/`);
  // Params: business, status, enabled 
};