import { AUTH, AUTH_SUCCESS } from './types'

export const signIn = () => {
	return {
    type: AUTH,
  };
};

export const signInSuccess = data => {
  return {
    type: AUTH_SUCCESS,
    payload: data
  };
};
