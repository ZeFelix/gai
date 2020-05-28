import "react-hot-loader/patch";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Routes} />
    </BrowserRouter>
  );
};

export default App;
