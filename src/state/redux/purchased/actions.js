import { PURCHASED } from './types'

export const saveToPurchase = data => {
  return {
    type: PURCHASED,
    payload: data
  };
};
