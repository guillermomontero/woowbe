import { useAuthStore } from '../../stores/auth';

const apiUrl: string = 'https://backend.dev.woowbe.com/api/v1';

export const apiCallPOST = async (url: string = '', data: Object = {}) => {
  const options: Object = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  try {
    const response = await fetch(`${apiUrl}${url}`, options);

    if (!response.ok) return { msg: 'No se ha podido realizar la petición' };

    const data = await response.json();

    return data;
  } catch (err) {
    return err;
  }
};

export const apiCallGET = async (url: string = '') => {
  const authStore = useAuthStore();
  const token = authStore.token;

  const options: Object = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {
    const response = await fetch(`${apiUrl}${url}`, options);

    if (!response.ok) return { msg: 'No se ha podido realizar la petición' };

    const data = await response.json();

    return data;
  } catch (err) {
    return err;
  }
};