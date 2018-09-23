import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { initialState } from '.';
import { rootReducer } from '../reducer';

// check if browser has redux dev tools extension
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = () =>
  process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger];

export const configureStore = (state = initialState) =>
  createStore(
    rootReducer,
    state,
    composeEnhancers(applyMiddleware(...middlewares()))
  );
