/* global window, document */
import React from 'react';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import App from '@/components/app';
import setupStore from '@/state/store';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const history = createBrowserHistory();
// eslint-disable-next-line no-underscore-dangle
const store = setupStore(history, window.__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
    <I18nextProvider
    i18n={ i18n }
    initialI18nStore={window.initialI18nStore}
    initialLanguage={window.initialLanguage}
  >
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    hydrate(
      <Provider store={store}>
        <I18nextProvider
          i18n={ i18n }
          initialI18nStore={window.initialI18nStore}
          initialLanguage={window.initialLanguage}
        >
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </I18nextProvider>
      </Provider>,
      document.getElementById('root'),
    );
  });
}
