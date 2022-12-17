import { fetchLogin, fetchRegister, fetchUserData } from "../../utils/fetches";
import {
  FETCH_AUTH_ERROR,
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
} from "../../utils/constants/auth";
import { setCookie } from "../../utils/cookie";
import {
  FETCH_USER_DATA_ERROR,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
} from "../../utils/constants/user-data";

// получение данных юзера
export function getData() {
  return function (dispatch) {
    dispatch({ type: FETCH_USER_DATA_REQUEST });
    fetchUserData()
      .then((res) => {
        dispatch({
          type: FETCH_AUTH_SUCCESS,
        });
        dispatch({
          type: FETCH_USER_DATA_SUCCESS,
          payload: res,
        });
      })
      .catch(() => {
        dispatch({
          type: FETCH_USER_DATA_ERROR,
        });
      });
  };
}

// регистрация
export function setRegister(form) {
  return function (dispatch) {
    dispatch({ type: FETCH_AUTH_REQUEST });
    fetchRegister(form)
      .then((res) => {
        if (res) {
          dispatch({
            type: FETCH_AUTH_SUCCESS,
          });
          const authToken = res.access;
          const refreshToken = res.refresh;
          setCookie("token", authToken, {});
          localStorage.setItem("refreshToken", refreshToken);
          getData()
        } else {
          dispatch({ type: FETCH_AUTH_ERROR });
        }
      })
      .catch(() =>
        dispatch({
          type: FETCH_AUTH_ERROR,
        })
      );
  };
}

// аутентификация
export function authenticateUser(form) {
  return function (dispatch) {
    dispatch({ type: FETCH_AUTH_REQUEST });
    fetchLogin(form)
      .then((res) => {
        if (res) {
          dispatch({
            type: FETCH_AUTH_SUCCESS,
          });
          dispatch({
            type: FETCH_USER_DATA_SUCCESS,
            payload: res
          });
          const authToken = res.access;
          const refreshToken = res.refresh;
          setCookie("token", authToken, { 'max-age': 604800 });
          localStorage.setItem("refreshToken", refreshToken);
        } else {
          dispatch({ type: FETCH_AUTH_ERROR });
        }
      })
      .catch(() =>
        dispatch({
          type: FETCH_AUTH_ERROR,
        })
      );
  };
}