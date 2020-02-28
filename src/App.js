import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";

import AuthState from "./context/auth/AuthState";
import UrgenceState from "./context/urgence/urgenceState";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from './components/routing/PrivateRoute'
import setAuthToken from "./utils/setAuthToken";
import urgenceOfDetail from "./components/pages/urgenceOfDetail";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <UrgenceState>
        <Router>
          <Fragment>
            <Navbar />

            <div className="container">
              <Switch>
              <PrivateRoute exact path='/' component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/detail/:id" component={urgenceOfDetail} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </UrgenceState>
    </AuthState>
  );
};

export default App;
