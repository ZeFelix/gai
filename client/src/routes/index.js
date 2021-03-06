import React, { useState, useEffect } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { isAuthenticated } from "../service/auth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Payment from "../pages/Payment";
import { PropTypes } from "prop-types";

const Routes = props => {
  const { location, match } = props;
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  /**
   * Authenticates user and set state variables
   * @function authUser
   */
  const authUser = async () => {
    try {
      await isAuthenticated();
      setLogged(true);
      setLoading(false);
    } catch (err) {
      setLogged(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    authUser();
  }, []);

  if (loading) return null;

  const isRoot =
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname === "/app" ||
    location.pathname === "/app/";

  if (!logged && location.pathname.indexOf("login") === -1) {
    return <Redirect to="/login" />;
  }

  if (isRoot) {
    return <Redirect to="/app/home" />;
  }

  return (
    <div className="App">
      <Route path={`${match.url}app/home`} component={Home} />
      <Route path={`${match.url}app/payment`} component={Payment} />
      <Route path={`${match.url}login`} component={Login} />
    </div>
  );
};

Routes.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object
};

export default withRouter(Routes);
