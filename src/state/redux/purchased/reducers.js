import { PURCHASED } from './types'

const initialState = {
  purchaseHistories: [],
};

const purchasedReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case PURCHASED: {
      const resultPurchase = [ ...state.purchaseHistories, payload ];
      return { ...state, purchaseHistories: resultPurchase };
    }
    default: {
      return state
    }
  }
};

export default purchasedReducers;
