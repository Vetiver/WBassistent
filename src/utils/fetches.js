import { baseUrl, checkResponse } from "./constants/api-constants";

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

  return fetch(`/register/`, requestOptions).then(
    checkResponse
  );
};

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
