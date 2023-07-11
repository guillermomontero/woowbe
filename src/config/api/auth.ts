import { apiCallPOST } from './index';

export const apiAuth = (payload: Object = {}) => {
  apiCallPOST('/auth/jwt/token/', payload);
}