import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";

const root = document.getElementById("root");

render(
  <AppContainer>
    <App />
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NewRoot = require("./App").default;
    render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      root
    );
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
