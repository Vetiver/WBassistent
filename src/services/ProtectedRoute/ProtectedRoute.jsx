import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { getCookie } from "../../utils/cookie.js";

export default function ProtectedRoute({
  anonymous = false,
  isAuth,
  children,
  path,
  ...rest
}) {
  const location = useLocation();

  if (anonymous && isAuth) {
    return <Redirect to="/" />;
  }

  if (!anonymous && !isAuth) {
    return <Redirect to={{ pathname: "/login", state: { from: location } }} />;
  }

  return <Route exact={true} {...rest}>{children}</Route>;
}

