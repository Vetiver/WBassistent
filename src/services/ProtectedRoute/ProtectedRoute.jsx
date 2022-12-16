import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { getCookie } from "../../utils/cookie.js";

export function ProtectedRoute({
  anonymous = false,
  isAuth,
  children,
  ...rest
}) {
  const dispatch = useDispatch();

  const location = useLocation();
  if (anonymous && isAuth) {
    return <Redirect to={location?.state?.from || "/"} />;
  }

  if (!anonymous && !isAuth) {
    // ...то отправляем его, например, на форму входа
    return <Redirect to={{ pathname: "/login", state: { from: location } }} />;
  }

  return <Route {...rest}>{children}</Route>;
}
