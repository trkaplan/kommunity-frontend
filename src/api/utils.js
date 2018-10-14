import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3008/',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const makeRequest = (type, path, body) => {
	instance[type](path, body)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
};

instance.interceptors.response.use(function (response) {
	// Do something with response data
	return response.data;
}, function (error) {
  const code = error.response.data && error.response.data.code;
	return Promise.reject({
		code,
	});
});
