import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducers from 'state/redux/rootReducers';
import promiseMiddleware from './middlewares/promiseMiddleware';

let middlewares = [
  thunk,
  promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
  })
];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, logger]
};

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };
