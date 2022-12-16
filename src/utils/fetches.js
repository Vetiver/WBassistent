import { baseUrl, checkResponse } from "./constants/api-constants";
import { getCookie } from "./cookie";

export const fetchRegister = (form) => {
  const requestOptions = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  };
  return fetch(`//${baseUrl}/register/`, requestOptions).then(checkResponse);
}
export const fetchLogin = (form) => {
  const requestOptions = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  };

  return fetch(`/login/`, requestOptions).then(checkResponse);
};

export const fetchUserData = () => {
  const requestOptions = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({access: getCookie("token")}),
  };

  return fetch(`//${baseUrl}/token/get_data/`, requestOptions).then(
    checkResponse
  );
};
