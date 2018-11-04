import React from 'react';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import App from '@/components/app';


import configureStore from '@/state/store';

export default (isServer, path) => {
  if (isServer) {
    const store = configureStore(null, {});
    return (
      <Provider store={store}>
        <StaticRouter location={path} context={{}}>
          <App/>
        </StaticRouter>
      </Provider>
    );
  }

  const history = createHistory();
  const store = configureStore(history, window.__PRELOADED_STATE__);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  );
};
