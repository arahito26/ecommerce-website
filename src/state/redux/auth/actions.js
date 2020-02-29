import { AUTH_REQUEST, AUTH_SUCCESS } from './types'

export const signIn = () => {
	return {
    type: AUTH_REQUEST,
  };
};

export const signInSuccess = data => {
  console.log('data:...-- ', data);
  return {
    type: AUTH_SUCCESS,
    payload: data
  };
};
