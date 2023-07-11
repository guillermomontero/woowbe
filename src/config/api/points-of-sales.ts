import { apiCallGET } from './controller';

export const apiPointsOfSalesList = async () => {
  return await apiCallGET('/points_of_sales/public/');
};

export const apiPointsOfSalesListPagination = async (page: number = 0) => {
  return await apiCallGET(`/points_of_sales/public/?page=${page}`);
};

export const apiPointsOfSalesId = async (id: number = 0) => {
  return await apiCallGET(`/points_of_sales/public/${id}`);
  // Params: business, status, radius
};