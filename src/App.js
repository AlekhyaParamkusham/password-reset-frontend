import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";

import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import ForgotPass from "./components/ForgotPass/ForgotPass";
import ResetPass from "./components/ResetPass/ResetPass";
import HomeUser from "./components/HomeUser/HomeUser";
import Details from "./components/Details/Details";
import UpdatePass from "./components/UpdatePass/UpdatePass";

function App() {
  const user = localStorage.getItem("user");

  return (
    <>
      <Router>
        <Switch>
          {user === "undefined" || user === null ? (
            <Route exact path="/">
              <Home />
            </Route>
          ) : (
            <Route exact path="/user">
              <HomeUser />
            </Route>
          )}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/user">
            <HomeUser />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/forgot">
            <ForgotPass />
          </Route>
          <Route exact path="/reset/:id">
            <ResetPass />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
          <Route exact path="/updatePass">
            <UpdatePass />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
