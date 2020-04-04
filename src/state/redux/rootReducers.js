import { combineReducers } from 'redux';

import authReducers from './auth/reducers';
import ecommerceReducers from './ecommerce/reducers';

const rootReducers = combineReducers({
  auth: authReducers,
  ecommerce: ecommerceReducers,
});

export default rootReducers;
