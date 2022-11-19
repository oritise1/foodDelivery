import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LoginImg } from "../../images/loginImage.svg";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="LoginWrapper">
      <div className="LeftWrapper">
        <LoginImg className="immmg" />
      </div>
      <div className="RightWrapper">
        <h1 className="welcome">Welcome Back!</h1>
        <input type="text" placeholder="Your Email Address" className="input" />
        <input type="text" placeholder="Your Password" className="input1" />
        <button className="loginBtn" onClick={() => navigate("/dashboard")}>
          LOGIN
        </button>
        <div>
          <ul>
            <li onClick={() => navigate("/signup")} className="link">Create an Account</li>
            <li >Forget Password</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
