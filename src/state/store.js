import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import rootReducer from './reducers';

const setup = (history, preloadedState) => {
  const middlewareRouter = routerMiddleware(history);
  const store = createStore(
    combineReducers({
      ...rootReducer,
      router: connectRouter(history),
    }),
    preloadedState,
    applyMiddleware(thunk, middlewareRouter),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default setup;
