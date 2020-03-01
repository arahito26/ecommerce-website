import { AUTH, AUTH_SUCCESS, AUTH_ERROR } from './types'

const initialState = {
  username: null,
  password: null,
  error: null,
  isLoading: false,
};

const authReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH: {
      return { ...state, isLoading: true };
    }
    case AUTH_SUCCESS: {
      return {
        ...state, ...payload, isLoading: false, error: null,
      };
    }
    case AUTH_ERROR: {
      return {
        ...state, ...payload, isLoading: false, username: null, password: null,
      };
    }
    default: {
      return state
    }
  }
};

export default authReducers;
