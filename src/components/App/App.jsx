import React from "react";
import Style from "../../components/App/App.module.css";
import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal.jsx";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import Prices from "../Prices/Prices";
import SearchField from "../SearchField/SearchField";
import Questions from '../Questions/Questions.jsx';
import Footer from '../Footer/Footer.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

function App() {
  const IsOpen = useSelector((state) => state.mainReducer.IsOpen);

  return (
    <div className={`${Style.App}`}>
      <AppHeader />
      <main className={Style.main}>
        <Switch>
        <Route path="/">
          <SearchField/>
          <SpecialOffers />
          <Prices />
          <Questions/>
          <Footer/>
        </Route>
        </Switch>
      </main>

      {IsOpen && <Modal />}
    </div>
  );
}

export default App;
