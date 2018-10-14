import { makeRequest } from './utils';

export const login = (username, password) => {
  makeRequest('post', '/member/login', {
    username,
    password,
  });
};

export const logout = () => {
  makeRequest('post', '/member/logout');
};
