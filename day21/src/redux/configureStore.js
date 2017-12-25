import {createStore, applyMiddleware} from 'redux';

import {rootReducer, initialState} from './reducers'
import {reducer, initialState as userInitialState} from './currentUser'

import { loggingMiddleware, apiMiddleware } from './middlewares';

export const configureStore = () => {
  const store = createStore(rootReducer, initialState, applyMiddleware(loggingMiddleware, apiMiddleware));

  return store;
}

export default configureStore;