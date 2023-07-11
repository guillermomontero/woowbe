import { apiCallGET } from './controller';

export const apiPointsOfSales = async () => {
  return await apiCallGET('/points_of_sales/public/');
};

export const apiPointsOfSalesId = async (id: number = 0) => {
  return await apiCallGET(`/points_of_sales/public/${id}`);
  // Params: business, status, radius
};