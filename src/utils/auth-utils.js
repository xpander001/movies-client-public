import apiClient from 'utils/api-client';

const AUTH_LOCALSTORAGE_KEY = '__auth_token__';
const AUTH_PREFIX = `api/users/`;

const getToken = async () => {
  return window.localStorage.getItem(AUTH_LOCALSTORAGE_KEY);
};

const saveToken = (token) => {
  return window.localStorage.setItem(AUTH_LOCALSTORAGE_KEY, token);
};

const signup = (name, email, password) => {
  debugger;
  return apiClient(`${AUTH_PREFIX}/register`, {
    method: 'POST',
    data: { name, email, password },
  }).then(({ user }) => {
    saveToken(user.token);
    return user;
  });
};

const login = (email, password) => {
  return apiClient(`${AUTH_PREFIX}/login`, {
    method: 'POST',
    data: { email, password },
  }).then((res) => {
    const user = res.user;
    saveToken(user.token);
    return user;
  });
};

const me = (token) => {
  return apiClient(`${AUTH_PREFIX}/me`, { token }).then(({ user }) => {
    return user;
  });
};

const logout = () => {
  window.localStorage.removeItem(AUTH_LOCALSTORAGE_KEY);
};

export { signup, login, logout, getToken, me };
