const API_BASE_URL = process.env.REACT_APP_API_URL;

const apiClient = (
  endpoint,
  { data, token, method, headers, ...customOptions } = {},
) => {
  const options = {
    method: method ? method : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'x-auth-token': token ? `${token}` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
      ...headers,
    },
    ...customOptions,
  };

  return fetch(`${API_BASE_URL}/${endpoint}`, options).then(
    async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    },
  );
};

export default apiClient;
