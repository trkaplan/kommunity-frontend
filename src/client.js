import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import setupStore from '$/state/store';
import App from '$/containers/app';

const store = setupStore(window.__PRELOADED_STATE__);

hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    hydrate(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root'),
    );
  });
}
