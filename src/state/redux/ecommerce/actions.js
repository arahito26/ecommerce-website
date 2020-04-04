import { ECOMMERCE, LOVED, PURCHASED } from './types';
import { fetchEcommerce } from './api';

export const getListData = params => ({
  type: ECOMMERCE,
  payload: {
    promise: fetchEcommerce(params)
  }
})

export const saveToLoved = data => {
  return {
    type: LOVED,
    payload: data
  };
};

export const saveToPurchase = data => {
  return {
    type: PURCHASED,
    payload: data
  };
};
