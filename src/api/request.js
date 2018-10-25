import { makeRequest } from './utils';

export const login = (username, password) => {
  /*
  return makeRequest('post', '/member/login', {
    username,
    password,
  });
  */

  // fake response, replace with backend call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        resolve('login successful!');
      }
      reject(new Error('credentials failed!'));
    }, 500);
  });
};

export const signup = (email: string, password:string) => {
  return makeRequest('post', '/api/v1/member/signup', {
    email,
    password,
  });
};

export const logout = () => {
  makeRequest('post', '/member/logout');
};
