/* global window, document */
import React from 'react';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import App from '@/components/app';
import setupStore from '@/state/store';

const history = createBrowserHistory();
// eslint-disable-next-line no-underscore-dangle
const store = setupStore(history, window.__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    hydrate(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>,
      document.getElementById('root'),
    );
  });
}
