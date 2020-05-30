import "react-hot-loader/patch";
import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import store from "./store";
import Routes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Routes} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
