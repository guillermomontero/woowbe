import { apiCallGET } from './controller';

export const apiBusinessList = async () => {
  return await apiCallGET('/business/public/');
};

export const apiBusinessListPagination = async (page: number = 0) => {
  return await apiCallGET(`/business/public/?page=${page}`);
};

export const apiBusinessId = async (id: number = 0) => {
  return await apiCallGET(`/business/public/${id}/`);
};