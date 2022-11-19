import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose, combineReducers } from "redux";
import {mainReduser} from '../services/reducers/mainReduser.jsx';

const reduсers = combineReducers({
    mainReduser: mainReduser,
  });

  const state = {};
export const store = configureStore({
  reducer: reduсers,
  state,
  devTools: true,
});