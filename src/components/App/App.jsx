import Style from "../../components/App/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import { Switch, Route } from "react-router-dom";
import { Homepage, Login } from "../../pages/all-pages";
import Footer from "../Footer/Footer";
import LicenseAgreement from "../../pages/LicenseAgreement/LicenseAgreement.jsx";
import PrivacyPolicy from "../../pages/PrivacyPolicy/PrivacyPolicy.jsx";
import RegisterPage from "../../pages/RegisterPage/register-page";
import Profile from "../../pages/Profile/Profile.jsx";
import ProtectedRoute from "../../services/ProtectedRoute/ProtectedRoute";
import { fetchUserData } from "../../utils/fetches";

function App() {
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (document.cookie.token !== "") {
  //     dispatch(fetchUserData());
  //   }
  // }, []);

  return (
    <div className={`${Style.App}`}>
      <AppHeader />
      <main className={Style.main}>
        <Switch>
          <Route path="/" exact={true}>
            <Homepage />
          </Route>
          <ProtectedRoute anonymous={true} path="/login" exact={true}>
            <Login />
          </ProtectedRoute>
          <ProtectedRoute anonymous={true} path="/register" exact={true}>
            <RegisterPage />
          </ProtectedRoute>
          <ProtectedRoute
            isAuth={isLogin}
            anonymous={false}
            path="/profile"
            exact={true}
          >
            <Profile />
          </ProtectedRoute>
          <Route path="/license-agreement" exact={true}>
            <LicenseAgreement />
          </Route>
          <Route path="/privacy-policy" exact={true}>
            <PrivacyPolicy />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
