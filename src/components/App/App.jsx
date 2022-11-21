import React from "react";
import Style from "../../components/App/App.module.css";
import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal.jsx";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../../pages/all-pages";

function App() {
  const IsOpen = useSelector((state) => state.mainReducer.IsOpen);

  return (
    <div className={`${Style.App}`}>
      <AppHeader />
      <main className={Style.main}>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>

      {IsOpen && <Modal />}
    </div>
  );
}

export default App;
