import { apiCallGET } from './controller';

export const apiOffersList = async () => {
  return await apiCallGET('/offers/public/');
};

export const apiOffersListPagination = async (page: number = 0) => {
  return await apiCallGET(`/offers/public/?page=${page}`);
};

export const apiOffersId = async (id: number = 0) => {
  return await apiCallGET(`/offers/public/${id}/`);
  // Params: business, status, enabled 
};