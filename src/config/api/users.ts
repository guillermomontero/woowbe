import { apiCallGET } from './controller';

export const apiUsers = async () => {
  return await apiCallGET('/users/me/');
};