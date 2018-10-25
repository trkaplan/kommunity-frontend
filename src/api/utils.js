import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3008/',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export const makeRequest = (type, path, body) => {
  return instance[type](path, body);
};

instance.interceptors.response.use((response:{}) => {
  // Do something with response data
  return response.data;
}, (error) => {
  const code = error.response.data && error.response.data.code;
  return Promise.reject(new Error({
    code,
  }));
});
