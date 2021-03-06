import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux";
import App from "./components/App";

import createStore from "./store";

const store = createStore(window.REDUX_DATA);

const el = document.getElementById("app");
ReactDOM.hydrate(
  <ReduxProvider store={store}>
    <Router>
      <App/>
    </Router>
  </ReduxProvider>,
  el);
