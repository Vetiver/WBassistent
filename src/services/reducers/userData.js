import {
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_ERROR,
  DELETE_USER,
} from "../../utils/constants/user-data";

const initialState = {
  isLoading: false,
  hasError: false,
  userInfo: {
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  },
};

export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
        userInfo: initialState.userInfo,
      };
    }

    case FETCH_USER_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        userInfo: {
          email: action.payload.email,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          phone_number: action.payload.phone_number,
        },
      };
    }
    case FETCH_USER_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        userInfo: initialState.userInfo,
      };
    }

    case DELETE_USER: {
      return {
        ...state,
        userInfo: initialState.userInfo,
      };
    }
    default:
      return state;
  }
};
