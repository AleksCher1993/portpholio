import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Pages } from "../pages";
import "./assets/styles/App.scss"

export const App = () => {
  return (
    <Provider store={store}>
      <Pages/>
    </Provider>
  );
};
