import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_ERROR,
  DELETE_USER,
  SET_LOGIN_STATUS,
} from "../../utils/constants/auth";

const initialState = {
  isLoading: false,
  hasError: false,
  userInfo: {
    email: "",
    first_name: "",
    last_name: "",
  },
  isLogin: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTH_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    }
    case FETCH_AUTH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        userInfo: {
          email: action.payload.email,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
        },
      };
    }
    case FETCH_AUTH_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
      };
    }

    case DELETE_USER: {
      return {
        ...state,
        userInfo: initialState.userInfo,
        isLogin: initialState.isLogin,
      };
    }

    case SET_LOGIN_STATUS: {
      return {
        ...state,
        isLogin: true,
      };
    }
    default:
      return state;
  }
};
