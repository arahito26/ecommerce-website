import { ECOMMERCE } from './types';
import { fetchEcommerce } from './api';

export const getListData = params => ({
  type: ECOMMERCE,
  payload: {
    promise: fetchEcommerce(params)
  }
})
