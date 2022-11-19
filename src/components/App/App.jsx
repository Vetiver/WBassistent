import React from 'react';
import Style from '../../components/App/App.module.css';
import AppHeader from '../../components/AppHeader/AppHeader.jsx';
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Modal from '../Modal/Modal.jsx';
function App() {
  const dispanch = useDispatch()
  const IsOpen = useSelector((state) => state.mainReduser.IsOpen)
  console.log(IsOpen)
  return (
    <div className={`${Style.App}`}>
      <AppHeader />
      {IsOpen && (
      <Modal/>
      )
      }
    </div>
  );
}

export default App;
