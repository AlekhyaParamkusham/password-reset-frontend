import React from "react";
import "./home.css";
import logo from "./../Images/SOHLogo.png";

import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="homeLogo">
          <h2> Your one stop place for Customized Embroidery Hoops!</h2>
          <div className="buttons">
            <Link to="/signup" className="btn sBtn">
              SIGN UP
            </Link>
            <Link to="/login" className="btn lBtn">
              LOGIN
            </Link>
          </div>
        </div>
        <div className="users">
          <img className="logo" src={logo} alt="logo" />
          <div className="info">
            <h3>Stay connected with us to get timely updates!</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
