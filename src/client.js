/* global window, document */
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import setupStore from '@/state/store';
import App from '@/containers/app';

// eslint-disable-next-line no-underscore-dangle
const store = setupStore(window.__PRELOADED_STATE__);
const getElement = document.getElementById('root');
hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  getElement,
);

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    hydrate(
      <Provider store={store}>
        <App />
      </Provider>,
      getElement,
    );
  });
}
