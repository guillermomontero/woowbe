const apiUrl: string = 'https://backend.dev.woowbe.com/api/v1';

export const apiCallPOST = (url: string = '', data: Object = {}) => {
  const options: Object = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  console.log(apiUrl, url, options, data);

  // fetch(`${apiUrl}${url}`, options)
  //   .then(response => response.json())
  //   .then(data => console.log(data));
};

export const apiCallGET = (url: string = '', data: Object = {}) => {
  const options: Object = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  console.log(apiUrl, url, options, data);

  // fetch(`${apiUrl}${url}`, options)
  //   .then(response => response.json())
  //   .then(data => console.log(data));
};