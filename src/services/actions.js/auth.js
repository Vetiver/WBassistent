import { fetchLogin, fetchRegister, fetchUserData } from "../../utils/fetches";
import {
  FETCH_AUTH_ERROR,
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  SET_LOGIN_STATUS,
} from "../../utils/constants/auth";
import { setCookie } from "../../utils/cookie";

// регистрация
export function setRegister(form) {
  return function (dispatch) {
    dispatch({ type: FETCH_AUTH_REQUEST }); 
    fetchRegister(form)
      .then((res) => {
        if (res) {
          dispatch({
            type: FETCH_AUTH_SUCCESS,
            payload: res,
          });
          dispatch({ type: SET_LOGIN_STATUS });
          const authToken = res.access;
          const refreshToken = res.refresh;// работать дима работать!! arbeiten! schnelle schnelle!!
          setCookie("token", authToken, {});
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

// аутентификация
export function authenticateUser(form) {
  return function (dispatch) {
    dispatch({ type: FETCH_AUTH_REQUEST });
    fetchLogin(form)
      .then((res) => {
        if (res) {
          dispatch({
            type: FETCH_AUTH_SUCCESS,
            payload: res,
          });
          dispatch({
            type: SET_LOGIN_STATUS,
          });
          const authToken = res.access;
          const refreshToken = res.refresh;
          setCookie("token", authToken, {});
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

// получение данных юзера
export function getData() {
  return function (dispatch) {
    dispatch({ type: FETCH_AUTH_REQUEST });
    fetchUserData()
      .then((res) => {
        if (res) {
          dispatch({
            type: FETCH_AUTH_SUCCESS,
            payload: res,
          });
          dispatch({ type: SET_LOGIN_STATUS });
        }
      })
      .catch(() => {
        // dispatch(refreshAccessToken());
      });
  };
}