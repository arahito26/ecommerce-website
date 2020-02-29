import {
	startLoading,
	finishLoading,
	errorLoading,
} from 'utils/reducerUtils';

import {
  ECOMMERCE,
  ECOMMERCE_SUCCESS,
  ECOMMERCE_ERROR,
} from './types';

const initialState = {
	data: null,
};

const ecommerceReducers = (state = initialState, { type, payload }) => {
	switch (type) {
		case ECOMMERCE: {
			const loadingState = startLoading(state);
      return Object.assign({}, loadingState);
		}
		case ECOMMERCE_SUCCESS: {
			const successState = finishLoading(state);
      return Object.assign({}, successState, {
        data: payload && payload[0] && payload[0].data,
      });
		}
		case ECOMMERCE_ERROR: {
			const errorState = errorLoading(state);
      return Object.assign({}, errorState, { data: null });
		}
		default: {
			return state;
		}
	}
};

export default ecommerceReducers;
