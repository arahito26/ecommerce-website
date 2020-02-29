import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducers from 'state/redux/rootReducers';

let middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
	middlewares = [...middlewares, logger]
};

const store = createStore(
	rootReducers,
	compose(applyMiddleware(...middlewares))
);

export { store };
