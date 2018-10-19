import { makeRequest } from './utils';

export const login = (username:string, password:string) => {
  makeRequest('post', '/member/login', {
    username,
    password,
  });
};

export const logout = () => {
  makeRequest('post', '/member/logout');
};
