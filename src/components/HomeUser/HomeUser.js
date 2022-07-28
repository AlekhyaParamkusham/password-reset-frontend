import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "./../Images/SOHLogo.png";
import "./../Home/home.css";
import { removeCookie, removeLocalStorage } from "../../utils/auth";
import Navbar from "../Navbar/Navbar";

const HomeUser = () => {
  const history = useHistory();
  const handleSignOut = () => {
    removeCookie("token");
    removeLocalStorage("user");
    if (!localStorage.getItem("user")) {
      history.push("/");
    }
  };
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="homeLogo" style={{ borderRight: "none" }}>
          <div className="buttonsUser">
            <Link to="/details" className="btn sBtn">
              Update user
            </Link>
            <Link onClick={handleSignOut} to="#" className="btn lBtn">
              Sign Out
            </Link>
          </div>
          <h2 style={{ margin: "5px", fontSize: "15px" }}>
            Welcome, user! We are glad to have you with us :)
          </h2>
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default HomeUser;
