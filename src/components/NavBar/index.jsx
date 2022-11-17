import React from "react";
import "./index.css";
import Logo from '../../images/logo.svg'

const Landing = () => {
  return (
    <div>
      <div className="HeaderWrapper">
        <div className="LinkWrapper">
        <img src={Logo} alt="no img" className="img"/>
          <h2 className="Title">
            Lilies</h2>
          <div></div>
          <div className="IconWrapper">
            <ul>
              <li>Home</li>
              <li>Login</li>
            </ul>
              <button className="signIn">
                <a href="http:/google.com" target={'_blank'} rel="noreferrer">
                  Sign Up
                </a>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
