import { combineReducers } from 'redux';

import authReducers from './auth/reducers';
import ecommerceReducers from './ecommerce/reducers';
import purchasedReducers from './purchased/reducers';

const rootReducers = combineReducers({
  auth: authReducers,
  ecommerce: ecommerceReducers,
  purchased: purchasedReducers,
});

export default rootReducers;
