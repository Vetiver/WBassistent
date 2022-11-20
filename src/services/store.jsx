import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose, combineReducers } from "redux";
import {mainReducer} from '../services/reducers/mainReducer.jsx';

const rootReducer = combineReducers({
    mainReducer: mainReducer,
  });

  const state = {};
export const store = configureStore({
  reducer: rootReducer,
  state,
  devTools: true,
});