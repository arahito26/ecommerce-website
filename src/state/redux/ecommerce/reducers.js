import {
	startLoading,
	finishLoading,
	errorLoading,
} from 'utils/reducerUtils';
import { message } from 'antd';

import {
  ECOMMERCE,
  ECOMMERCE_SUCCESS,
	ECOMMERCE_ERROR,
	LOVED,
	PURCHASED,
} from './types';

const initialState = {
	data: null,
	purchaseHistories: null,
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
		case LOVED: {
			const updateProduct = []
			const copyProduct = state.data && state.data.productPromo;
			copyProduct && copyProduct.map(item => updateProduct.push(item.id === payload.id ? payload : item))

			const updatePurchaseHistories = []
			const copyPurchaseHistory = state.purchaseHistories;
			copyPurchaseHistory && copyPurchaseHistory.map(item => updatePurchaseHistories.push(item.id === payload.id ? payload : item))

			return {
				...state,
				data: {...state.data, productPromo: updateProduct},
				purchaseHistories: updatePurchaseHistories,
      };
		}
		case PURCHASED: {
			let resultPurchase = []
			if (state.purchaseHistories === null) {
				resultPurchase = [ payload ];
			} else {
				resultPurchase = [ ...state.purchaseHistories, payload ];
			}
			message.success('Product has been purchase!');
      return { ...state, purchaseHistories: resultPurchase };
    }
		default: {
			return state;
		}
	}
};

export default ecommerceReducers;
