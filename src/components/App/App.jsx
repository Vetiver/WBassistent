import Style from "../../components/App/App.module.css";
import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import { Switch, Route } from "react-router-dom";
import { Homepage } from "../../pages/all-pages";
import Footer from "../Footer/Footer";
import LicenseAgreement from '../../pages/LicenseAgreement/LicenseAgreement.jsx';
import PrivacyPolicy from '../../pages/PrivacyPolicy/PrivacyPolicy.jsx';

function App() {
  return (
    <div className={`${Style.App}`}>
      <AppHeader />
      <main className={Style.main}>
        <Switch>
          <Route path="/" exact={true}>
            <Homepage />
          </Route>
          <Route path="/license-agreement" exact={true}>
            <LicenseAgreement/>
          </Route>
          <Route path="/privacy-policy" exact={true}>
            <PrivacyPolicy/>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
