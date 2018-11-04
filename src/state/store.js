import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = (history, preloadedState) => {
  const middleware = routerMiddleware(history);
  const store = createStore(
    combineReducers({
      ...rootReducer,
      routing: routerReducer,
    }),
    preloadedState,
    applyMiddleware(thunk, middleware),
  );
  return store;
};

export default configureStore;
