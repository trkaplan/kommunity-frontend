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
  /*
  return makeRequest('post', '/member/signup', {
    email,
    password,
  });
  */

  // fake response, replace with backend call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email !== 'already@registered.com' && password) {
        resolve('user created!');
      }
      reject(new Error('user already exists!'));
    }, 500);
  });
};

export const logout = () => {
  makeRequest('post', '/member/logout');
};
