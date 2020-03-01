import { AUTH, AUTH_SUCCESS } from './types'
import { googleprovider, fbprovider, fbase } from '../../../utils/auth'
import { history } from "../../../router/index";


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
      var token = result.user.uid;
      var email = result.user.email;
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
      var token = result.user.uid;
      var email = result.user.email;
      console.log(result, "-----")
      return {
        username: email,
        password: token
      }
    }
    catch (error) {
    }
  }
}
