import { makeRequest } from './utils';

export const login = (username, password) => {
  // TODO(bariscc): once backend is ready, uncomment this and start making actual calls

  /*
  return makeRequest('post', '/member/login', {
    username,
    password,
  });
  */

  // fake response, replace with actual call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        resolve('login successful!');
      }
      reject(new Error('credentials failed!'));
    }, 500);
  });
};

export const signup = (email, password, captchaResponse) => {
  return makeRequest('post', '/api/v1/member/signup', {
    captchaResponse,
    email,
    password,
  });
};

export const forgotPassword = email => {
  // TODO(mustaphaturhan): we gonna add forgot password request later.
  // return makeRequest('post', '/api/v1/member/forgotPassword', {
  //   email,
  // });

  // fake response, replace with actual call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'example@mail.com') {
        resolve('correct');
      }
      reject(new Error('credentials failed!'));
    }, 500);
  });
};

export const logout = () => {
  makeRequest('post', '/member/logout');
};
