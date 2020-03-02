import { AUTH, AUTH_SUCCESS } from './types'
import { googleprovider, fbprovider, fbase } from '../../../utils/auth'

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

export function signInFacebook() {
  return async dispatch => {
    try {
      const result = await fbase.auth().signInWithPopup(fbprovider)
      let token = result.user.uid;
      let email = result.user.email;
      return {
        username: email,
        password: token
      }
    }
    catch (error) {
    }
  }
}

export function signInGoogle() {
  return async dispatch => {
    try {
      const result = await fbase.auth().signInWithPopup(googleprovider)
      let token = result.user.uid;
      let email = result.user.email;
      return {
        username: email,
        password: token
      }
    }
    catch (error) {
    }
  }
}
