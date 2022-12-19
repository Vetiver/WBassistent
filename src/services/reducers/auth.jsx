import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_ERROR,
  LOGOUT_USER,
  NO_ERROR
} from "../../utils/constants/auth";

const initialState = {
  isLoading: false,
  hasError: false,
  isLogin: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTH_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
        isLogin: false,
      };
    }
    case NO_ERROR: {
      return {
        ...state,
        hasError: false,
      };
    }
    case FETCH_AUTH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        isLogin: true,
      };
    }

    case FETCH_AUTH_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        isLogin: false,
      };
    }

    case LOGOUT_USER: {
      return {
        ...state,
        isLogin: false,
      };
    }
    default:
      return state;
  }
};
